import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layouts/layout_default"
import styles from "../scss_modules/components/contact.module.scss"
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi"
import { MdClose } from "react-icons/md"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [warning, setWarning] = useState("")
  const [displayConfirmation, setDisplayConfirmation] = useState(false)

  const checkLang = (e, n) => {
    return e
  }
  const submitContactForm = e => {
    e.preventDefault()
    if (!email || !message) {
      return setWarning("Fields EMAIL and MESSAGE are required")
    }
    if (!isValidEmail(email)) {
      return setWarning("Email address is not valid")
    }
    const dataToSend = { name, email, message }

    //change hostname to /
    fetch("/api/submitContactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data === "Succes" || "Failed") {
          console.log(data)
          setDisplayConfirmation(true)
        }
      })
    setWarning("")
    return e.target.reset()
  }
  const isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  return (
    <Layout>
      <SEO title="Services" />
      <nav className={styles.nav}>
        <p>
          <Link to="/">Home</Link> > <Link to="/contact">Contact</Link>
        </p>
      </nav>
      <main className={styles.page}>
        <form className={styles.form} onSubmit={submitContactForm}>
          <h1 className={styles.form__header}>
            {checkLang("Contact Form", "Contact Formulier")}
          </h1>
          <p className={styles.form__info}>
            {checkLang(
              "Do you have a question? Fill in this contact form and I will answer your question within 3 working days. Please include your contact data - at least your email - in this form:",
              "Heb je een vraag of opmerking? Vul dan onderstaand contactformulier in, wij streven ernaar om je vraag binnen 3 werkdagen te beantwoorden. Heb je een vraag over een online bestelling? Vermeld dan het ordernummer in onderstaand formulier:"
            )}
          </p>
          {warning ? (
            <div className={styles.form__warning}>{warning}</div>
          ) : null}
          <div className={styles.form__field}>
            <label>{checkLang("Name", "Naam")}</label>
            <input
              name="contact_name"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className={styles.form__field}>
            <label>{checkLang("Email", "Email")}</label>
            <input
              name="contact_email"
              type="email"
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form__field}>
            <label>{checkLang("Message", "Bericht")}</label>
            <textarea
              name="contact_msg"
              maxLength="500"
              required
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.form__btn}>
            <button type="submit">{checkLang("Send", "Stuur")}</button>
          </div>
        </form>

        <div className={styles.details} id="klantenservice">
          <h1 className={styles.details__header}>
            {checkLang("Customer Service", "Klantenservice")}
          </h1>
          <h3 className={styles.details__intro}>
            {checkLang(
              "always FOR YOUR DISPOSAL",
              "ONZE KLANTENSERVICE IS JE GRAAG VAN DIENST"
            )}
          </h3>
          <p className={styles.details__info}>
            {checkLang(
              "Do you want to talk immediately? Please contact me by choosing one of the options below.",
              "Heb je een vraag voor ons? Neem gerust contact met een van onze klantenservice medewerkers op via de onderstaande contactgegevens."
            )}
          </p>
          <a href="tel:0682307051" className={styles.details__field}>
            <FiPhoneCall className={styles.details__field_icon} />
            <p>06 82 30 70 51</p>
          </a>
          <a
            href="mailTo:info@michalantczak.com"
            className={styles.details__field}
          >
            <FiMail className={styles.details__field_icon} />
            <p>info@michalantczak.com</p>
          </a>
          <div className={styles.details__field}>
            <FiMapPin className={styles.details__field_icon} />
            <div>
              <p>Michal Antczak</p>
              <p>Web Developer</p>
              <p>Oostervenne 397</p>
              <p>1444XN Purmerend</p>
            </div>
          </div>
        </div>
        {displayConfirmation ? (
          <div className={styles.confirmation}>
            <div
              className={styles.confirmation__close}
              onClick={() => setDisplayConfirmation(false)}
            >
              <MdClose />
            </div>
            <h1>Thank you for your message!</h1>
            <h1>I will contact you as soon as possible.</h1>
            <a href="#" onClick={() => setDisplayConfirmation(false)}>
              <span>Ok</span>
            </a>
          </div>
        ) : null}
      </main>
    </Layout>
  )
}

export default Contact
