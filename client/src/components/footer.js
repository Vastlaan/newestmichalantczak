import React from "react"
import { Link } from "gatsby"
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa"
import styles from "../scss_modules/components/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.page}>
      <div className={styles.main}>
        <div className={styles.main__details}>
          <h3>Michal Antczak</h3>
          <p>
            <FaMapMarkerAlt style={{ marginRight: "1rem", color: "pink" }} />
            Oostervenne 397
          </p>
          <p>1444XN Purmerend</p>
          <p>
            <FaPhone style={{ marginRight: "1rem", color: "#2aa119" }} />
            <a href="tel:0031682307051">06 82 30 70 51</a>
          </p>
          <p>
            <FaEnvelope style={{ marginRight: "1rem", color: "#0fa3b1" }} />
            <a href="mailto:info@michalantczak.com">info@michalantczak.com</a>
          </p>
        </div>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/privacy#cookies">Cookies</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div className={styles.legal}>
        <p>
          &copy; {new Date().getFullYear()} Copyright Michal Antczak. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
