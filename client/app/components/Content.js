import React, { useEffect } from "react"

import TransferList from "./TransferList"
import CompanyList from "./CompanyList"
import ButtonPanel from "./ButtonPanel"
import FlightList from "./FlightList"

function Content() {
  return (
    <div className="main">
      <div className="menu-group">
        <TransferList />
        <CompanyList />
      </div>
      <div className="flight-group">
        <ButtonPanel />
        <FlightList />
      </div>
    </div>
  )
}

export default Content
