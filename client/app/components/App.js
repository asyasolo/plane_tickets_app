import React, { useState, useEffect } from "react"

import "./App.css"

import ExtraOptions from "./ExtraOptions/ExtraOptions"
import ButtonCluster from "./ButtonCluster/ButtonCluster"
import Form from "./Form/Form"
import ItemList from "./ItemList/ItemList"
import HorizontalRule from "./misc/HorizontalRule/HorizontalRule"
import Header from "./Header/Header"

const initialFilters = {
  origin: "",
  destination: "",
  dateStart: "",
  dateEnd: "",
  numStops: [],
  /* CHANGE TO companyName */
  companyId: "all"
}

function App() {
  const [filters, setFilters] = useState(initialFilters)

  const handleFilterChange = event => {
    const { name, value, type } = event.target
    const updatedFilters = { ...filters }

    if (type === "checkbox") {
      if (event.target.checked) {
        updatedFilters.numStops.push(value)
      } else {
        updatedFilters.numStops = updatedFilters.numStops.filter(stop => stop !== value)
      }
    } else {
      updatedFilters[name] = value
    }

    setFilters(updatedFilters)
  }

  const handleCompanyChange = event => {
    const updatedFilters = { ...filters }
    updatedFilters.companyId = event.target.value
    setFilters(updatedFilters)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    // вызов функции API с передачей параметров фильтрации
    console.log(filters)
  }

  return (
    <>
      <Header />
      <div className="main">
        <Form filters={filters} onFilterChange={handleFilterChange} onSubmit={handleFormSubmit} />
        <HorizontalRule />
        <div className="main-group">
          <ExtraOptions filters={filters} onFilterChange={handleFilterChange} onCompanyChange={handleCompanyChange} />
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
