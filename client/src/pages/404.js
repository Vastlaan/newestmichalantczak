import React from "react"
import Layout from "../layouts/layout_default"
import SEO from "../components/seo"
import styles from "../scss_modules/components/notfoundpage.module.scss"
import { FaRegSadCry } from "react-icons/fa"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className={styles.page}>
      <h1>NOT FOUND</h1>
      <FaRegSadCry className={styles.icon} />
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
