import React, { useState } from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Layout from "../layouts/layout_default"
import styles from "../scss_modules/components/projects.module.scss"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

function Projects() {
  const data = useStaticQuery(graphql`
    {
      claireMain: file(relativePath: { eq: "claireMain.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      claireReviews: file(relativePath: { eq: "ClaireReviews.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      claireSearch: file(relativePath: { eq: "claireSearch.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barberMain: file(relativePath: { eq: "barberMain.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barberGallery: file(relativePath: { eq: "barberGallery.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      barberPrices: file(relativePath: { eq: "barberPrices.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resumeMain: file(relativePath: { eq: "resumeMain.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resumeHow: file(relativePath: { eq: "resumeHow.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resumeContact: file(relativePath: { eq: "resumeContact.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restaurant_1: file(relativePath: { eq: "restaurant_1.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restaurant_2: file(relativePath: { eq: "restaurant_2.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      restaurant_3: file(relativePath: { eq: "restaurant_3.png" }) {
        name
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const lacasaPhotosNamesArray = Object.keys(data).filter(name =>
    name.toLowerCase().includes("restaurant")
  )
  const clairePhotosNamesArray = Object.keys(data).filter(name =>
    name.toLowerCase().includes("claire")
  )
  const barberPhotosNamesArray = Object.keys(data).filter(name =>
    name.toLowerCase().includes("barber")
  )
  const resumePhotosNamesArray = Object.keys(data).filter(name =>
    name.toLowerCase().includes("resume")
  )
  const [laCasaPhoto, setLaCasaPhoto] = useState(0)
  const [clairePhoto, setClairePhoto] = useState(0)
  const [barberPhoto, setBarberPhoto] = useState(0)
  const [resumePhoto, setResumePhoto] = useState(0)

  const shufflePhoto = (direction, state, setState, length) => {
    if (direction === "up") {
      if (state >= length - 1) {
        return setState(0)
      } else {
        return setState(state + 1)
      }
    } else if (direction === "down") {
      if (state === 0) {
        return setState(length - 1)
      } else {
        return setState(state - 1)
      }
    }
    return
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <nav className={styles.nav}>
        <p>
          <Link to="/">Home</Link> > <Link to="/projects">Projects</Link>
        </p>
      </nav>
      <main className={styles.page}>
        <h1>Projects Gallery</h1>
        <article>
          <h3>La Casa Restaurant</h3>
          <section className={styles.gallery}>
            <button
              className={styles.gallery__left}
              onClick={() =>
                shufflePhoto(
                  "down",
                  laCasaPhoto,
                  setLaCasaPhoto,
                  lacasaPhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleLeft />
            </button>
            <div className={styles.image}>
              <Image
                fluid={data[lacasaPhotosNamesArray[laCasaPhoto]].image.fluid}
                alt={data[lacasaPhotosNamesArray[laCasaPhoto]].name}
              />
            </div>
            <button
              className={styles.gallery__right}
              onClick={() =>
                shufflePhoto(
                  "up",
                  laCasaPhoto,
                  setLaCasaPhoto,
                  lacasaPhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleRight />
            </button>
          </section>
          <section className={styles.description}>
            <div>
              <p>
                <strong>LaCasa Restaurant</strong> is the italian restaurant.
                Their website present the company as sofisticated and elegant
                place. Visitor can chose the language and deep in the menu
                available online. For those who want to reserve the table
                special resevation system collect all necessary data including
                coronavirus disclaimer. Guests can also send a contact form if
                they have any questions.
              </p>
            </div>
            <div className={styles.description__buttons}>
              <a href="https://condescending-euclid-455bb0.netlify.app/">
                Visit website
              </a>
              <a href="https://github.com/Vastlaan/restaurant.git">View code</a>
            </div>
          </section>
        </article>
        <article>
          <h3>Webshop Claire Hembury</h3>
          <section className={styles.gallery}>
            <button
              className={styles.gallery__left}
              onClick={() =>
                shufflePhoto(
                  "down",
                  clairePhoto,
                  setClairePhoto,
                  clairePhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleLeft />
            </button>
            <div className={styles.image}>
              <Image
                fluid={data[clairePhotosNamesArray[clairePhoto]].image.fluid}
                alt={data[`claireMain`].name}
              />
            </div>
            <button
              className={styles.gallery__right}
              onClick={() =>
                shufflePhoto(
                  "up",
                  clairePhoto,
                  setClairePhoto,
                  clairePhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleRight />
            </button>
          </section>
          <section className={styles.description}>
            <div>
              <p>
                <strong>Claire Hempbury</strong> is the fashion webshop. It
                contains all desired functionality. Its user interface is very
                easy and intuitive which makes navigation between sections
                almost natural. Website tracks recent showed products and stores
                shopping Cart in localStorage object. You can register or buy
                without logging in. Checkout is safe and supports many popular
                payment methods.
              </p>
            </div>
            <div className={styles.description__buttons}>
              <a
                href="https://clairehempshop.herokuapp.com"
                className={styles.sample}
              >
                Visit website
              </a>
              <a href="https://github.com/Vastlaan/webshop">View code</a>
            </div>
          </section>
        </article>
        <article>
          <h3>Barber Hairdresser</h3>
          <section className={styles.gallery}>
            <button
              className={styles.gallery__left}
              onClick={() =>
                shufflePhoto(
                  "down",
                  barberPhoto,
                  setBarberPhoto,
                  barberPhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleLeft />
            </button>
            <div className={styles.image}>
              <Image
                fluid={data[barberPhotosNamesArray[barberPhoto]].image.fluid}
                alt={data[barberPhotosNamesArray[barberPhoto]].name}
              />
            </div>
            <button
              className={styles.gallery__right}
              onClick={() =>
                shufflePhoto(
                  "up",
                  barberPhoto,
                  setBarberPhoto,
                  barberPhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleRight />
            </button>
          </section>
          <section className={styles.description}>
            <div>
              <p>
                <strong>Barber</strong> is the hairdresser saloon. This neat and
                functional Web Application is made for the hairdresser salon.
                It's more than only informative website where customer can find
                prices and look at the beautifull and ease to use photo gallery.
                It's also elegant and easy way to send a contact request and
                make the appointments online.
              </p>
            </div>
            <div className={styles.description__buttons}>
              <a href="https://kapsalon.michalantczak.com">Visit website</a>
              <a href="https://github.com/Vastlaan/kapsalon.michalantczak.com">
                View code
              </a>
            </div>
          </section>
        </article>
        <article>
          <h3>Royal Resume Generator</h3>
          <section className={styles.gallery}>
            <button
              className={styles.gallery__left}
              onClick={() =>
                shufflePhoto(
                  "down",
                  resumePhoto,
                  setResumePhoto,
                  resumePhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleLeft />
            </button>
            <div className={styles.image}>
              <Image
                fluid={data[resumePhotosNamesArray[resumePhoto]].image.fluid}
                alt={data[resumePhotosNamesArray[resumePhoto]].name}
              />
            </div>
            <button
              className={styles.gallery__right}
              onClick={() =>
                shufflePhoto(
                  "up",
                  resumePhoto,
                  setResumePhoto,
                  resumePhotosNamesArray.length
                )
              }
            >
              <FaChevronCircleRight />
            </button>
          </section>
          <section className={styles.description}>
            <div>
              <p>
                This Website is a free service allowing users generate their own
                resume, based on the template created by myself. The resume is
                filled by information provided by user in the form. Each section
                of the form is equivalent to the resume section, some fields are
                required, some have restricted amount of characters. Resume is
                generated on server side instance of Chrome. For this I use
                puppeteer and handlebars libraries. Then file is saved temporary
                (not in database) on server side and send to the client, where
                it is handled by browser (downloaded or opened). Service is free
                of charge, however user can 'donate' me using Paypal donate
                button. I do not store any information provided by client in the
                form, to make usage save and comfortable for users. Feel free to
                check it out!
              </p>
            </div>
            <div className={styles.description__buttons}>
              <a href="https://www.royalresumegenerator.com">Visit website</a>
              <a href="https://github.com/Vastlaan/royalresumegenerator">
                View code
              </a>
            </div>
          </section>
        </article>
        <article>
          <h3>My other projects</h3>
          <ul>
            <li>
              <h6 href="https://noirfatale.com">
                Noir Fatale Dark Electronics
              </h6>
              <p>
                It's my private music project website. Making music is my big
                passion. This website has been created with simple HTML5, CSS3,
                JavaScript and a single line of PHP code to serve index.html
                file. I invite you to visit and listen to my dark, original,
                electronic music.
              </p>
              <a href="https://noirfatale.com">Visit website</a>
            </li>
            <li>
              <h6 href="https://chefsbook.org">Chefsbook</h6>
              <p>
                Chefsbook is a tool for chefs, where you can store the most
                important data being used in the daily kitchen life. Think of
                recepies, schedules, calender with events, preparation lists. To
                use the service user has to register account or log in with
                Google.
              </p>
              <a href="https://chefsbook.org">Visit website</a>
            </li>
          </ul>
        </article>
      </main>
    </Layout>
  )
}

export default Projects
