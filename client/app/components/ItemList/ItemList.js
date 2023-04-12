import React, { useState, useEffect } from "react"

import "./ItemList.css"
import Item from "./Item/Item"
import api from "../../utils/api"

function ItemList({ response, sorting }) {
  const [tickets, setTickets] = useState([])
  const [visibleTickets, setVisibleTickets] = useState(3)

  const handleShowMore = () => {
    setVisibleTickets(prevVisibleTickets => prevVisibleTickets + 5)
  }

  useEffect(() => {
    console.log("fetching first")
    const fetchData = async () => {
      try {
        const ticketResponse = await api.fetchTickets()
        if (ticketResponse) {
          setTickets(ticketResponse)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setTickets(response)
  }, [response])

  useEffect(() => {
    if (sorting == "fastest") {
      const sortedData = tickets.sort((a, b) => a.info.duration - b.info.duration)
      setTickets(sortedData)
    } else if (sorting == "cheapest") {
      const sortedData = tickets.sort((a, b) => a.price - b.price)
      setTickets(sortedData)
    } else if (sorting == "optimal") {
      const sortedData = tickets.sort((a, b) => {
        const aRatio = a.info.duration / a.price
        const bRatio = b.info.duration / b.price
        return aRatio - bRatio
      })
      setTickets(sortedData)
    }
  }, [tickets, sorting])

  return (
    <div>
      {tickets.length === 0 && <h1>Загрузка</h1>}

      {tickets.slice(0, visibleTickets).map((item, index) => {
        if (index < visibleTickets) {
          return <Item key={item.id} info={item.info} companyId={item.companyId} price={item.price} />
        } else return null
      })}
      {visibleTickets < tickets.length && (
        <button onClick={handleShowMore} className="browse_btn">
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </button>
      )}
    </div>
  )
}

export default ItemList
