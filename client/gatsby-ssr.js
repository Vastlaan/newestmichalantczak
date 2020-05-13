import React from "react"
import ContextProvider from "./src/storeProvider"

export const wrapRootElement = ({ element }) => (
  <ContextProvider>{element}</ContextProvider>
)
