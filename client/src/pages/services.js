import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../scss_modules/components/services.module.scss"
import SEO from "../components/seo"
import Layout from "../layouts/layout_default"

function Services() {
  const data = useStaticQuery(graphql`
    {
      laptop: file(relativePath: { eq: "seo.png" }) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      webshop: file(relativePath: { eq: "webshop.png" }) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobapp: file(relativePath: { eq: "mobileapps.png" }) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resdes: file(relativePath: { eq: "resdes.png" }) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Services" />
      <nav className={styles.nav}>
        <p>
          <Link to="/">Home</Link> > <Link to="/services">Services</Link>
        </p>
      </nav>
      <main className={styles.page}>
        <h1>Your desired product in professional hands</h1>
        <article>
          <h3>Responsive Websites</h3>
          <section>
            <p>
              Creating responsive websites is the must in the age of various
              resolutions of devices being used by people. I use modern{" "}
              <strong>CSS3</strong> and <strong>Sass</strong> style syntax to
              achive that goal. Proper useage of <strong>media-queries</strong>,
              display layouts like <strong>grid and flexbox</strong> facilitated
              with <strong>imports, mixins and functions</strong> results with
              unforgetable user experience.
            </p>
            <p>
              More complex architectures require more advanced{" "}
              <strong>HTML5</strong> markup. I resolve every given task into
              efficient and SEO friendly HTML structure. With good knowladge of
              powerfull <strong>React</strong> or build-on-React{" "}
              <strong>GatsbyJS</strong> I bring every desired functionality to
              life. My intuitive and eye-candy designs deliver users always
              amazing experience.
            </p>
            <div className={styles.image}>
              <Image fluid={data.resdes.image.fluid} alt="responsive design" />
            </div>
          </section>
        </article>
        <article>
          <h3>Webshops</h3>
          <section>
            <p>
              I specialize in fully functional, well designed and user friendly
              webshops. Automated invoices, secure check-outs with{" "}
              <strong>Stripe</strong> API, online support and individual
              accounts. ALmost everything is possible.
            </p>
            <p>
              To provide even better user experience my webshops are programed
              to store clients views history in database, items from shopping
              cart in cookies or localStorage. This helps to define clients
              preferences and improve webshop offert.
            </p>
            <div className={styles.image}>
              <Image fluid={data.webshop.image.fluid} alt="webshop" />
            </div>
          </section>
        </article>
        <article>
          <h3>Mobile Apps</h3>
          <section>
            <p>
              I write mobile apps in <strong>React Native</strong>, which means
              they are compatible with both Apple and Android devices.
            </p>
            <p>
              Developing apps is more involving and requires more time. That's
              why I focus on small projects, but I can join your team if
              necessary to work on more complex products.
            </p>
            <div className={styles.image}>
              <Image fluid={data.mobapp.image.fluid} alt="mobile apps" />
            </div>
          </section>
        </article>
        <article>
          <h3>Online Marketing and SEO</h3>
          <section>
            <p>
              The visibillity of the website is a complex result of different
              factors. Proper HTML structure, fast loading assets, backlinks,
              website map, geo and meta tags, efficient keywords, name and
              description - those are the one which every good developer should
              be aware of while designing the product.
            </p>
            <p>
              I always follow best SEO practices and try to advice clients how
              to build good website reputation, because 'visible' websites
              require constant care and engagement.
            </p>
            <div className={styles.image}>
              <Image fluid={data.laptop.image.fluid} alt="laptop data" />
            </div>
          </section>
        </article>
      </main>
    </Layout>
  )
}

export default Services
