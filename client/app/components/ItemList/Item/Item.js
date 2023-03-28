import React, { useEffect } from "react"

import "./Item.css"

function Item(props) {
  return (
    <div className="flight-item">
      <div className="fligth-item-header">
        <h1>{props.price}</h1>
        <img src="./img/S7_logo.png" alt="" className="flight-logo" />
      </div>

      <div className="flight-item-body">
        <div className="flight-item-group">
          <p className="flight-item-city gray">MOW - HKT</p>
          <h3 className="flight-item-time">10:45 - 8:00</h3>
        </div>

        <div className="flight-item-group">
          <p className="gray">В ПУТИ</p>
          <h3 className="flight-item-time">10:45 - 8:00</h3>
        </div>

        <div className="flight-item-group">
          <p className="gray">2 ПЕРЕСАДКИ</p>
          <h3 className="flight-item-city-stops">HKG, JNB</h3>
        </div>
      </div>
    </div>
  )
}

export default Item
