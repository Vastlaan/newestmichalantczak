import React, { useContext } from "react"
import { Context } from "../store"
import styles from "../scss_modules/components/cookies.module.scss"

function CookiesMessage() {
  const { store, dispatch } = useContext(Context)

  return (
    <div className={styles.cookies}>
      <p>
        This website uses cookies to deliver best user experience.Cookies do not
        cause any harm to your computer and do not contain viruses. By visiting
        this website you agree to our cookies policy.
        <a href="/privacy"> Here you will find more information</a>
      </p>
      <button
        onClick={() => {
          const cookieMessage = { agreed: true }
          localStorage.setItem(
            "michalantczakcookiepolicy",
            JSON.stringify(cookieMessage)
          )
          return dispatch({
            type: "closeCookies",
            payload: false,
          })
        }}
      >
        Ok, Prima!
      </button>
    </div>
  )
}

export default CookiesMessage
