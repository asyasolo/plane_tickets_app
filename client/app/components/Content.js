import React, { useEffect } from "react"

import TransferList from "./TransferList"
import CompanyList from "./CompanyList"
import ButtonPanel from "./ButtonPanel"
import FlightList from "./FlightList"
import DestinationPanel from "./DestinationPanel"

function Content() {
  return (
    <div className="main">
      <DestinationPanel />
      <hr />
      <div className="main-group">
        <div className="menu-group">
          <TransferList />
          <CompanyList />
        </div>
        <div className="flight-group">
          <ButtonPanel />
          <FlightList />
          <button className="browse_btn">ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ</button>
        </div>
      </div>
    </div>
  )
}

export default Content
