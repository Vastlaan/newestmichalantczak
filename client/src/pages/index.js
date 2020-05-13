import React, { useReducer } from "react"
import { initialState, reducer, Context } from "../store.js"

import SEO from "../components/seo"
import Main from "../components/main"
import Layout from "../layouts/layout_default"

function IndexPage() {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <Context.Provider value={{ store, dispatch }}>
      <Layout>
        <SEO title="Home" />
        <Main />
      </Layout>
    </Context.Provider>
  )
}

export default IndexPage
