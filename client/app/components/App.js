import React, { useEffect } from "react"

import "./App.css"

import ExtraOptions from "./ExtraOptions/ExtraOptions"
import ButtonCluster from "./ButtonCluster/ButtonCluster"
import Form from "./Form/Form"
import ItemList from "./ItemList/ItemList"
import HorizontalRule from "./misc/HorizontalRule/HorizontalRule"
import Header from "./Header/Header"

function App() {
  return (
    <>
      <Header />
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
    </>
  )
}

export default App
