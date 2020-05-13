import React, { useEffect, useContext } from "react"
import { Context } from "../store"
import Header from "../components/header"
import Nav from "../components/nav"
import Footer from "../components/footer"
import CookieMessage from "../components/cookieMessage"

const Layout = ({ children }) => {
  const { store, dispatch } = useContext(Context)
  useEffect(() => {
    if (localStorage.getItem("michalantczakcookiepolicy")) {
      const cookiePolicy = JSON.parse(
        localStorage.getItem("michalantczakcookiepolicy")
      )

      if (cookiePolicy.agreed) {
        dispatch({
          type: "closeCookies",
          payload: false,
        })
      }
    }
  }, [])
  return (
    <div>
      <Header />
      <Nav />
      {children}
      <Footer />
      {store.cookies ? <CookieMessage /> : null}
    </div>
  )
}

export default Layout
