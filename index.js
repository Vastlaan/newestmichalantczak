const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const bodyParser = require("body-parser");
const pg = require("pg");
const keys = require("./config/keys.js");

const app = express();

app.use(bodyParser.json());

const Pool = pg.Pool;

const pool = new Pool({
    user: keys.DATABASE_USER,
    host: keys.DATABASE_HOST,
    password: keys.DATABASE_PASSWORD,
    database: keys.DATABASE_NAME,
    port: keys.DATABASE_PORT,
});

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:8000"); // change in production to https://
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
// });

app.get("/api/getArticles", async (req, res) => {
    const response = await pool.query("select * from articles");
    const result = response.rows;
    return res.status(200).json(result);
});
app.post("/api/uploadVote", async (req, res) => {
    const id = req.body.id;
    const client = await pool.connect();

    try {
        await client.query("BEGIN");
        await client.query(
            `update articles set votes=votes+1 where article_id='${id}'`
        );
        await client.query("COMMIT");
        return res.status(200).json("Updated");
    } catch (e) {
        await client.query("ROLLBACK");
        res.status(400).json("Ups, something went wrong!");
        throw e;
    }
});

app.post("/api/submitContactForm", (req, res) => {
    const mailer = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: keys.EMAIL_USER,
            pass: keys.EMAIL_PASSWORD, // generated ethereal password
        },
    });

    const mail = {
        from: "info@michalantczak.com", // sender address
        to: ["info@michalantczak.com", `${req.body.email}`], // list of receivers
        subject: "Message form from michalantczak.com", // Subject line
        html: `	<div>
                    <h1>Thank you for your message!</h1>
                    <h2>I recieved this credentials:</h2>
    				<h3 style="text-align:center">Name: ${req.body.name}.</h3>
    				<h4 style="text-align:center">Email: ${req.body.email}.</h4>
    				<p style="text-align:center">Question: ${req.body.message}.</p>

    			</div>`, // html body
    };
    mailer.sendMail(mail, function (err, res) {
        if (err) {
            return console.log(err);
        }
        console.log(`Message sent: ${res}`);
    });

    return res.status(200).json({ message: "succes" });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
    });
}

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
