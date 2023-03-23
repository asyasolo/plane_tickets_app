import React from "react"
import { createRoot } from "react-dom/client"

function Main() {
  return <h1>Workin'</h1>
}

const root = createRoot(document.getElementById("app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
