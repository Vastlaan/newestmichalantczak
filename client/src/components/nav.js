import React from "react"
import { Link } from "gatsby"
import styles from "../scss_modules/components/nav.module.scss"

const nav = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default nav
