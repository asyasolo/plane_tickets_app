import React, { useState, useEffect } from "react"

import "./ItemList.css"
import Item from "./Item/Item"
import api from "../../utils/api"

function ItemList({ response }) {
  const [tickets, setTickets] = useState([])
  const [visibleTickets, setVisibleTickets] = useState(3)

  const handleShowMore = () => {
    setVisibleTickets(prevVisibleTickets => prevVisibleTickets + 5)
  }

  useEffect(() => {
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
    console.log("fetching kinda")
    const fetchData = async () => {
      try {
        const ticketResponse = response ? response : "Ой, ничего не найдено" /*await api.fetchTickets()*/
        if (ticketResponse) {
          setTickets(ticketResponse)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [response])

  return (
    <div>
      {tickets.length === 0 && <div>Loading...</div>}
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
