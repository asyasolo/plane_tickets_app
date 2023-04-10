import React, { useEffect, useState } from "react"

import api from "../utils/api"
import ItemList from "./ItemList/ItemList"

function Filters({ filters, sorting }) {
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  // получили данные с api
  const fetchData = async () => {
    try {
      const response = await api.fetchTickets()
      if (response) {
        setData(response)
      }
    } catch (error) {
      console.log(error)
    }
  }
  fetchData()

  // отфильтровать данные на основе пропса filters
  useEffect(() => {
    setFilteredData(
      data.filter(item => {
        if (filters.origin && item.info.origin !== filters.origin) {
          return false
        }
        if (filters.destination && item.info.destination !== filters.destination) {
          return false
        }
        if (filters.dateStart && new Date(item.info.date) < new Date(filters.dateStart)) {
          return false
        }
        if (filters.dateEnd && new Date(item.info.date) > new Date(filters.dateEnd)) {
          return false
        }
        if (filters.companyId && filters.companyId !== "all") {
          if (item.companyId !== filters.companyId) {
            return false
          }
        }

        if (filters.numStops && filters.numStops.length > 0) {
          const numStopsParsed = filters.numStops.map(item => Number(item))
          if (!numStopsParsed.includes(item.info.stops.length)) return false
        }

        return true
      })
    )
  }, [filters])

  return <ItemList response={filteredData} sorting={sorting} />
}

export default Filters
