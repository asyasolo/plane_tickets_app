import React from "react"
import { createRoot } from "react-dom/client"

import App from "./components/App"

function Main() {
  return (
    <>
      <App />
    </>
  )
}

const root = createRoot(document.getElementById("app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
