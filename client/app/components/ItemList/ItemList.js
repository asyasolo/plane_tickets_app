import React, { useState, useEffect } from "react"

import Button from "../misc/Button/Button"
import Item from "./Item/Item"
import api from "../../utils/api"

function ItemList() {
  const [tickets, setTickets] = useState([])
  const [visibleTickets, setVisibleTickets] = useState(3)

  const handleShowMore = () => {
    setVisibleTickets(prevVisibleTickets => prevVisibleTickets + 5)
  }

  useEffect(() => {
    const fetchData = async () => {
      const ticketResponse = await api.fetchTickets()
      if (ticketResponse) {
        setTickets(ticketResponse)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {tickets.length === 0 && <div>Loading...</div>}
      {tickets.slice(0, visibleTickets).map(item => (
        <Item key={item.id} info={item.info} companyId={item.companyId} price={item.price} />
      ))}
      {visibleTickets < tickets.length && <Button onClick={handleShowMore} className="browse_btn" text="ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ" />}
    </div>
  )
}

export default ItemList
