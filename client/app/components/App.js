import React, { useEffect } from "react"

import "./App.css"

import ExtraOptions from "./ExtraOptions/ExtraOptions"
import ButtonCluster from "./ButtonCluster/ButtonCluster"
import Form from "./Form/Form"
import ItemList from "./ItemList/ItemList"
import HorizontalRule from "./misc/HorizontalRule/HorizontalRule"

function App() {
  return (
    <div className="main">
      <Form />
      <HorizontalRule />
      <div className="main-group">
        <ExtraOptions />
        <div className="flight-group">
          <ButtonCluster />
          <ItemList />
        </div>
      </div>
    </div>
  )
}

export default App
