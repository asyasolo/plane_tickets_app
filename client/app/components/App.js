import React, { useState, useEffect } from "react"

import "./App.css"

import ExtraOptions from "./ExtraOptions/ExtraOptions"
import ButtonCluster from "./ButtonCluster/ButtonCluster"
import Form from "./Form/Form"
import HorizontalRule from "./misc/HorizontalRule/HorizontalRule"
import Header from "./Header/Header"
import api from "../utils/api"
import Filters from "./Filters"

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
  const [sorting, setSorting] = useState("")
  const [response, setResponse] = useState([])

  const handleResponseChange = newResponse => {
    setResponse(newResponse)
  }

  const handleSortChange = newSorting => {
    setSorting(newSorting)
    console.log(sorting)
  }

  const handleFilterChange = event => {
    const { name, value, type } = event.target
    const updatedFilters = { ...filters }

    if (type === "checkbox") {
      updatedFilters.numStops = event.target.checked ? [...updatedFilters.numStops, value] : updatedFilters.numStops.filter(stop => stop !== value)
    } else {
      updatedFilters[name] = value
    }
    setFilters(updatedFilters)
  }

  const handleCompanyChange = event => {
    const updatedFilters = { ...filters }
    updatedFilters.companyId = event.target.value
    console.log(updatedFilters)
    setFilters(updatedFilters)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()
    // вызов функции API с передачей параметров фильтрации
    console.log(filters)

    try {
      const ticketResponse = await api.fetchTickets(filters)
      if (ticketResponse) {
        handleResponseChange(ticketResponse)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Header />
      <div className="main">
        <Form filters={filters} onFilterChange={handleFilterChange} onSubmit={handleFormSubmit} onResponseChange={handleResponseChange} />
        <HorizontalRule />
        <div className="main-group">
          <ExtraOptions filters={filters} onFilterChange={handleFilterChange} onCompanyChange={handleCompanyChange} />
          <div className="flight-group">
            <ButtonCluster onSortChange={handleSortChange} />
            <Filters filters={filters} sorting={sorting} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
