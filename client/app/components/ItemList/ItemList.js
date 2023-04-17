import React, { useState, useEffect } from "react"

import "./ItemList.css"
import Item from "./Item/Item"

function ItemList({ response, sorting }) {
  const [tickets, setTickets] = useState([])
  const [visibleTickets, setVisibleTickets] = useState(3)

  const handleShowMore = () => {
    setVisibleTickets(prevVisibleTickets => prevVisibleTickets + 5)
  }

  useEffect(() => {
    setTickets(response)
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
        const aRatio = a.price / a.info.duration
        const bRatio = b.price / b.info.duration
        if (a.price == b.price && a.info.duration > b.info.duration) {
          return bRatio - aRatio
        } else return aRatio - bRatio
      })
      setTickets(sortedData)
    }
  }, [tickets, sorting])

  return (
    <div>
      {tickets.length === 0 && <h1>Загрузка</h1>}

      {tickets.length > 0 &&
        tickets.slice(0, visibleTickets).map((item, index) => {
          if (index < visibleTickets) {
            return (
              <Item
                key={item.id}
                info={item.info}
                companyId={item.companyId}
                price={item.price}
              />
            )
          } else return null
        })}
      {visibleTickets < tickets.length && (
        <button
          onClick={handleShowMore}
          className="browse_btn"
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
        </button>
      )}
    </div>
  )
}

export default ItemList
