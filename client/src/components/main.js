import React, { useEffect } from "react"
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaHtml5,
  FaCss3,
  FaSass,
  FaReact,
  FaAws,
} from "react-icons/fa"
import {
  DiJavascript1,
  DiNginx,
  DiNodejs,
  DiDigitalOcean,
  DiPostgresql,
  DiMongodb,
} from "react-icons/di"
import GraphIcon from "../images/graphql.png"
import { Link } from "gatsby"
import styles from "../scss_modules/components/main.module.scss"

function Main() {
  useEffect(() => {
    const animateToView = () => {
      const element = document.querySelector("#quotes")

      const bodyRect = document.body.getBoundingClientRect()
      const elemRect = element.getBoundingClientRect()
      const offset = elemRect.top - bodyRect.top

      const applyEffectAt = offset - window.innerHeight / 1.2

      const apply = bodyRect.y + applyEffectAt

      if (apply <= 0) {
        element.style.opacity = 1
        return (element.style.transform = "translateX(0)")
      } else {
        element.style.opacity = 0
        return (element.style.transform = "translateX(-100%)")
      }
    }
    window.addEventListener("scroll", animateToView)

    return () => {
      window.removeEventListener("scroll", animateToView)
    }
  })

  return (
    <main className={styles.page}>
      <article className={styles.main}>
        <div className={styles.slogan}>
          <h1>Keep your bussines online</h1>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Online Marketing</li>
            <li>Systems Administration</li>
          </ul>
          <p>
            <a href="mailto:info@michalantczak.com">
              <FaEnvelope style={{ marginRight: "2rem", color: "#0fa3b1" }} />
            </a>
            <a href="https://github.com/Vastlaan">
              <FaGithub style={{ marginRight: "2rem", color: "purple" }} />
            </a>
            <a href="https://www.linkedin.com/in/michal-antczak/">
              <FaLinkedin style={{ marginRight: "2rem", color: "darkblue" }} />
            </a>
          </p>
        </div>
        <div className={styles.info}>
          <div className={styles.image}>
            <p>
              Future of <br />
              web design
            </p>
            {/* <Image
              fluid={data.file.image.fluid}
              alt="think about things differently"
            /> */}
          </div>
          <p>
            I love to create functional, useful and qualitative products wrapped
            in sharp design. Using modern technologies and following best design
            practices I build user-friendly web tools.
          </p>
          <p>
            If you're looking for a fullstack developer with passion, who can
            perform a great work also under the pressure of deadlines - then
            don't hesitate to contact me.
          </p>
        </div>
      </article>
      <article className={styles.quotes} id="quotes">
        <p>
          <FaQuoteLeft className={styles.quotes__left} />I don't just build
          websites
        </p>
        <p>
          I build websites that sell
          <FaQuoteRight className={styles.quotes__right} />
        </p>
      </article>
      <article className={styles.page}>
        <h3>What can I do for you?</h3>
        <div className={styles.technologies}>
          <div className={styles.technologies__component}>
            <h6>Responsive Design</h6>
            <p>
              I'm fluent in <strong>JavaScript</strong> scripting language -
              including new ES6 syntax. Markup and style languages hide no
              secrets from me. I know how to design and validate complicated{" "}
              <strong>HTML</strong> structures and style them with{" "}
              <strong>CSS</strong> and <strong>Sass</strong>. For more advanced
              projects I use <strong>React</strong> or <strong>Gatsby</strong>{" "}
              combined with Nodejs API's.
            </p>
            <ul>
              <li>
                <DiJavascript1
                  style={{ color: "orange", fontSize: "3.5rem" }}
                />
              </li>
              <li>
                <FaHtml5 style={{ color: "darkblue", fontSize: "3.5rem" }} />
              </li>
              <li>
                <FaCss3 style={{ color: "orangered", fontSize: "3.5rem" }} />
              </li>
              <li>
                <FaSass style={{ color: "purple", fontSize: "3.5rem" }} />
              </li>
              <li>
                <FaReact style={{ color: "skyblue", fontSize: "3.5rem" }} />
              </li>
            </ul>
            <Link to="/services">
              <span>Read more</span>
            </Link>
          </div>
          <div className={styles.technologies__component}>
            <h6>Servers & Cloud Computing</h6>
            <p>
              I have experience with both <strong>AWS</strong> EC2 instances and{" "}
              <strong>DigitalOcean</strong> droplets. Based on Linux OS I can
              bring to live many kinds of API's, websites and databases. I love
              to use <strong>Nginx</strong> as reverse proxy server and{" "}
              <strong>NodeJs</strong> for a logic architecture.
            </p>
            <ul>
              <li>
                <DiNodejs style={{ color: "darkgreen", fontSize: "5rem" }} />
              </li>
              <li>
                <FaAws style={{ color: "orange", fontSize: "3.5rem" }} />
              </li>
              <li>
                <DiNginx style={{ color: "green", fontSize: "5rem" }} />
              </li>

              <li>
                <DiDigitalOcean style={{ color: "blue", fontSize: "5rem" }} />
              </li>
            </ul>
            <Link to="/services">
              <span>Read more</span>
            </Link>
          </div>
          <div className={styles.technologies__component}>
            <h6>Database managment</h6>
            <p>
              I'm most fluent in good old open source{" "}
              <strong>PostgreSQL</strong>. However for smaller projects I prefer{" "}
              <strong>MongoDB</strong>. Recently I started my adventure with{" "}
              <strong>GraphQL</strong> and I fell in love with it!
            </p>
            <ul>
              <li>
                <DiPostgresql style={{ color: "blue", fontSize: "4rem" }} />
              </li>
              <li>
                <DiMongodb style={{ color: "darkgreen", fontSize: "4rem" }} />
              </li>
              <li>
                <img
                  src={GraphIcon}
                  alt="graphql icon"
                  style={{ width: "2rem", height: "3rem" }}
                />
              </li>
            </ul>
            <Link to="/services">
              <span>Read more</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

export default Main
