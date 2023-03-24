import React from "react"
import { createRoot } from "react-dom/client"

import "./main.css"

import Header from "./components/Header"
import Content from "./components/Content"

function Main() {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
