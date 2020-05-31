import React, { useState, useContext, useEffect } from "react"
import { Link } from "gatsby"
import { Context } from "../store"
import SEO from "../components/seo"
import Layout from "../layouts/layout_default"
import { FaHeart, FaClock } from "react-icons/fa"
import styles from "../scss_modules/components/blog.module.scss"
import Article1 from "../articles/article_1.js"
import Article2 from "../articles/article_2.js"

function Blog() {
  const [showArticle, setShowArticle] = useState(0)
  const { store, dispatch } = useContext(Context)

  const appendArticle = (num, id) => {
    setShowArticle(num)
    const wrapper = document.querySelector(`#${id}`)
    return wrapper.scrollIntoView({ behavior: "smooth" })
  }
  const getArticlesVotes = () => {
    store.articles.forEach(art => {
      const id = art.article_id
      const votes = art.votes
      const votesElement = document.querySelector(`#likes-${id}`)
      return (votesElement.innerHTML = votes)
    })
  }
  const uploadArticles = () => {
    fetch("/api/getArticles")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "getArticles",
          payload: data,
        })
      })
      .catch(e => console.log(e))
  }
  //add like
  const addNewLike = async id => {
    try {
      const res = await fetch("/api/uploadVote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
      const data = await res.json()
      if (data === "Updated") {
        uploadArticles()
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getArticlesVotes()
  }, [store.articles])

  return (
    <Layout>
      <SEO title="Services" />
      <nav className={styles.nav}>
        <p>
          <Link to="/">Home</Link> > <Link to="/blog">Blog</Link>
        </p>
      </nav>
      <main className={styles.page}>
        <ul className={styles.header}>
          <li>
            Sort by:
            <span>date</span>
            <span>votes</span>
          </li>
          <li>
            Popular:
            <span>JavaScript</span>
            <span>Nginx</span>
          </li>
        </ul>

        <div className={styles.article}>
          <div className={styles.article__header}>
            <div className={styles.article__header_date}>
              <FaClock style={{ marginRight: "1rem" }} />
              Date of submiting:
              <span>06-05-2020</span>
            </div>
          </div>
          <div className={styles.article__title}>
            <h6>
              Connect to Linux Virtual Server via Visual Studio Code on Windows
              10 using Secure Shell protocol (SSH) without PuTTY.
            </h6>
          </div>

          <div className={styles.article__buttons}>
            <div className={styles.article__buttons_read}>
              {showArticle === 1 ? (
                <button onClick={() => setShowArticle(0)}>Close</button>
              ) : (
                <button onClick={() => appendArticle(1, "article_1")}>
                  Read article
                </button>
              )}
            </div>

            <div className={styles.article__buttons_like}>
              <FaHeart onClick={() => addNewLike("article_1")} />
              <span id="likes-article_1"></span>
            </div>
          </div>

          <div className={styles.article__wrapper}>
            <div className={styles.article__wrapper_content} id="article_1">
              {showArticle === 1 ? <Article1 /> : null}
            </div>
          </div>

          <div className={styles.article__tags}>
            <p>Tags:</p>
            <ul>
              <li>#VS Code</li>
              <li>#Windows</li>
              <li>#Linux</li>
              <li>#SSH</li>
            </ul>
          </div>
        </div>

        <div className={styles.article}>
          <div className={styles.article__header}>
            <div className={styles.article__header_date}>
              <FaClock style={{ marginRight: "1rem" }} />
              Date of submiting:
              <span>30-04-2020</span>
            </div>
          </div>
          <div className={styles.article__title}>
            <h6>Ubuntu Configuration with SSH</h6>
          </div>

          <div className={styles.article__buttons}>
            <div className={styles.article__buttons_read}>
              {showArticle === 2 ? (
                <button onClick={() => setShowArticle(0)}>Close</button>
              ) : (
                <button onClick={() => appendArticle(2, "article_2")}>
                  Read article
                </button>
              )}
            </div>

            <div className={styles.article__buttons_like}>
              <FaHeart onClick={() => addNewLike("article_2")} />
              <span id="likes-article_2"></span>
            </div>
          </div>

          <div className={styles.article__wrapper}>
            <div className={styles.article__wrapper_content} id="article_2">
              {showArticle === 2 ? <Article2 /> : null}
            </div>
          </div>

          <div className={styles.article__tags}>
            <p>Tags:</p>
            <ul>
              <li>#VS Code</li>
              <li>#Windows</li>
              <li>#Linux</li>
              <li>#SSH</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Blog
