import React from "react"

export const initialState = {
  lang: "en",
  articles: [],
  cookies: true,
}

export const reducer = (state, action) => {
  switch (action.type) {
    case "useLangNL":
      return {
        lang: "nl",
        articles: state.articles,
        cookies: state.cookies,
      }

    case "useLangEN":
      return {
        lang: "en",
        articles: state.articles,
        cookies: state.cookies,
      }

    case "getArticles":
      return {
        lang: state.lang,
        articles: action.payload,
        cookies: state.cookies,
      }

    case "closeCookies":
      return {
        lang: state.lang,
        articles: state.articles,
        cookies: action.payload,
      }
    default:
      return state
  }
}

export const Context = React.createContext()
