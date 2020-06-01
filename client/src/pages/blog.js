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
  // const getArticlesVotes = () => {
  //   store.articles.forEach(art => {
  //     const id = art.article_id
  //     const votes = art.votes
  //     const votesElement = document.querySelector(`#likes-${id}`)
  //     return (votesElement.innerHTML = votes)
  //   })
  // }
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

  // useEffect(() => {
  //   getArticlesVotes()
  // }, [store.articles])

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

        {store.articles.map(article => {
          return (
            <div key={`blog-${article.article_id}`} className={styles.article}>
              <div className={styles.article__header}>
                <div className={styles.article__header_date}>
                  <FaClock style={{ marginRight: "1rem" }} />
                  Date of submiting:
                  <span>06-05-2020</span>
                </div>
              </div>
              <div className={styles.article__title}>
                <h6>{article.title}</h6>
              </div>

              <div className={styles.article__buttons}>
                <div className={styles.article__buttons_read}>
                  {showArticle === article.control_id ? (
                    <button onClick={() => setShowArticle(0)}>Close</button>
                  ) : (
                    <button
                      onClick={() =>
                        appendArticle(article.control_id, article.article_id)
                      }
                    >
                      Read article
                    </button>
                  )}
                </div>

                <div className={styles.article__buttons_like}>
                  <FaHeart onClick={() => addNewLike(article.article_id)} />
                  <span>{article.votes}</span>
                </div>
              </div>

              <div className={styles.article__wrapper}>
                <div
                  className={styles.article__wrapper_content}
                  id={article.article_id}
                >
                  {showArticle === article.control_id && showArticle === 1 ? (
                    <Article1 />
                  ) : showArticle === article.control_id &&
                    showArticle === 2 ? (
                    <Article2 />
                  ) : null}
                </div>
              </div>

              <div className={styles.article__tags}>
                <p>Tags:</p>
                <ul>
                  {article.tags.map((tag, i) => {
                    return (
                      <li key={`${article.article_id}-${tag}-${i}`}>{tag}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          )
        })}
      </main>
    </Layout>
  )
}

export default Blog
