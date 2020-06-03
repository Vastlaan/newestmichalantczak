import React, { useState, useEffect, useContext } from "react"
import { Context } from "../store"
import Image from "gatsby-image"
import styles from "../scss_modules/components/header.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { FaMoon, FaGithub, FaLinkedin, FaSun } from "react-icons/fa"
import { MdClose } from "react-icons/md"

const Header = () => {
  //get global state
  const { store, dispatch } = useContext(Context)
  //set the default theme
  const [theme, setTheme] = useState("light")
  const [displayResults, setDisplayResults] = useState(false)
  //check if preffered theme is stored in localStorage, if so set it up
  useEffect(() => {
    setDisplayResults(false)
    //fetch articles
    fetch("/api/getArticles")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "getArticles",
          payload: data,
        })
      })
      .catch(e => console.log(e))

    if (window.localStorage.getItem("theme")) {
      //check for preferable theme if stored in localStorage and set it
      const theme = window.localStorage.getItem("theme")
      setTheme(theme)
      switchTheme(theme)
    }
    // function responsible to change headers position when scrolled down of a value of its height
    const stickyHeader = () => {
      const header = document.querySelector("#header")
      const headerStyles = header.style
      if (header.offsetHeight <= window.pageYOffset) {
        headerStyles.position = "fixed"
        headerStyles.top = "0"
        headerStyles.right = "0"
      } else {
        headerStyles.position = "static"
        headerStyles.top = "0"
        headerStyles.right = "0"
      }
    }
    //add sticky header to window scroll listener
    window.addEventListener("scroll", stickyHeader)
    // remove stickyHeader listener on unmount
    return () => window.removeEventListener("scroll", stickyHeader)
  }, [])
  //switch colors theme
  const switchTheme = t => {
    if (t) {
      return document.documentElement.setAttribute("data-theme", t)
    }
    if (theme === "light") {
      setTheme("dark")
      window.localStorage.setItem("theme", "dark")
      return document.documentElement.setAttribute("data-theme", "dark")
    } else {
      setTheme("light")
      window.localStorage.setItem("theme", "light")
      return document.documentElement.setAttribute("data-theme", "light")
    }
  }
  const clearSearchInput = () => {
    return (document.querySelector("#searchInput").value = "")
  }
  const searchArticle = async e => {
    e.preventDefault()
    //set keywords array
    const keywordsArray = [
      { key: "services", title: "What can I do for you?", link: "/services" },
      { key: "projects", title: "Projects Gallery", link: "/projects" },
      { key: "website", title: "What can I do for you?", link: "/services" },
      { key: "app", title: "What can I do for you?", link: "/services" },
      { key: "mobile", title: "What can I do for you?", link: "/services" },
      { key: "blog", title: "My personal Blog", link: "/blog" },
      { key: "contact", title: "Contact Me!", link: "/contact" },
      { key: "phone", title: "Contact Me!", link: "/contact" },
      { key: "mail", title: "Contact Me!", link: "/contact" },
      { key: "address", title: "Contact Me!", link: "/contact" },
      { key: "adres", title: "Contact Me!", link: "/contact" },
    ]
    //assign searched value
    const value = document.querySelector("#searchInput").value.toLowerCase()
    //get all articles
    const arrayOfArticles = store.articles
    //filter articles if their title or tags match searched values, assign to new array
    const filteredArticles = arrayOfArticles.filter(
      art => art.title.toLowerCase().includes(value) || art.tags.includes(value)
    )

    //create html template
    let inner = "<ul>"

    filteredArticles.forEach(art => {
      inner = inner + `<a href='/blog#${art.article_id}'>${art.title}</a>`
    })

    keywordsArray.forEach(keyword => {
      if (keyword.key.includes(value.toLowerCase())) {
        inner = inner + `<a href='${keyword.link}'>${keyword.title}</a>`
      }
    })
    inner = inner + `</ul>`

    if (filteredArticles.length === 0 && inner === "<ul></ul>") {
      inner = "<ul><li>NOTHING FOUND</li></ul>"
    }

    await setDisplayResults(true)
    //get div where list of articles will be append
    const searchResultsField = document.querySelector("#search__found")
    searchResultsField.innerHTML = inner
    return clearSearchInput()
  }

  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "me2.png" }) {
        image: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={styles.page} id="header">
      <div className={styles.name}>
        <h1>Michal Antczak</h1>
      </div>
      <div className={styles.search}>
        <input
          id="searchInput"
          type="text"
          onKeyDown={e => (e.keyCode === 13 ? searchArticle(e) : null)}
        />
        <button
          onClick={e => searchArticle(e)}
          onKeyDown={e => searchArticle(e)}
        >
          Search
        </button>
        {displayResults ? (
          <div className={styles.results}>
            <MdClose
              onClick={() => setDisplayResults(false)}
              className={styles.results__icon}
            />
            <div id="search__found"></div>
          </div>
        ) : null}
      </div>

      <ul className={styles.icons}>
        <li className={styles.image}>
          <Image fluid={data.file.image.fluid} alt="me" />
        </li>
        <a
          href="https://github.com/Vastlaan"
          className={styles.util_color_purple}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/michal-antczak/"
          className={styles.util_color_blue}
        >
          <FaLinkedin />
        </a>
        <p onClick={() => switchTheme()} onKeyDown={() => switchTheme()}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </p>
      </ul>
    </header>
  )
}

export default Header
