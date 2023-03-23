import React, { useEffect } from "react"

import TransferList from "./TransferList"
import CompanyList from "./CompanyList"
import ButtonPanel from "./ButtonPanel"
import FlightList from "./FlightList"

function Content() {
  return (
    <>
      <TransferList />
      <CompanyList />
      <ButtonPanel />
      <FlightList />
    </>
  )
}

export default Content
