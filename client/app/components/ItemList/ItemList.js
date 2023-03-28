import React, { useState, useEffect } from "react"

import Item from "./Item/Item"
import api from "../../utils/api"

function ItemList() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.fetchFlights()
      if (response) {
        setData(response)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      {data.map(item => {
        const items = []
        items.push(<Item key={item.id} info={item.info} companyId={item.companyId} price={item.price} />)
        return items
      })}
    </>
  )
}

export default ItemList
