import React, { useState, useEffect } from "react"

import "./Item.css"
import api from "../../../utils/api"

function Item(props) {
  const [companies, setCompanies] = useState([])

  function convertMsToHours(ms) {
    const hours = Math.floor(ms / 1000 / 60 / 60)
    const minutes = Math.floor(ms % 3600000) / 60000
    return { hours, minutes }
  }

  function convertUnixTimeToDateTime(unixTime) {
    const date = new Date(unixTime * 1000)
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const formattedHours = hours < 10 ? `0${hours}` : hours
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
    return `${formattedHours}:${formattedMinutes}`
  }

  function countStops(arr) {
    switch (arr.length) {
      case 1:
        return "Одна пересадка"
        break
      case 2:
        return "Две пересадки"
        break
      default:
        return "Без пересадок"
        break
    }
  }

  function getLogo() {
    for (let i = 0; i < companies.length; i++) {
      if (props.companyId == companies[i].id) {
        return companies[i].logo
      }
    }
    return
  }

  useEffect(() => {
    const fetchData = async () => {
      const companiesResponse = await api.fetchCompanies()
      if (companiesResponse) {
        setCompanies(companiesResponse)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="flight-item">
      <div className="fligth-item-header">
        <h1>{props.price.toLocaleString("ru-RU")}</h1>
        <img src={`./img/${getLogo()}`} alt="" className="flight-logo" />
      </div>

      <div className="flight-item-body">
        <div className="flight-item-group">
          <p className="flight-item-city gray">
            {props.info.origin} — {props.info.destination}
          </p>
          <h3 className="flight-item-time">
            {convertUnixTimeToDateTime(props.info.dateStart)} — {convertUnixTimeToDateTime(props.info.dateEnd)}
          </h3>
        </div>

        <div className="flight-item-group">
          <p className="gray">В ПУТИ</p>
          <h3 className="flight-item-time">
            {convertMsToHours(props.info.duration).hours} ч {convertMsToHours(props.info.duration).minutes} мин
          </h3>
        </div>

        <div className="flight-item-group">
          <p className="gray">{countStops(props.info.stops)}</p>
          <h3 className="flight-item-city-stops">{props.info.stops.map(item => item + " ")}</h3>
        </div>
      </div>
    </div>
  )
}

export default Item
