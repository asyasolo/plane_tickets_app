import React, { useEffect } from "react"

import "./ExtraOptions.css"

import StopsOptions from "./StopsOptions/StopsOptions"
import CompaniesOptions from "./CompaniesOptions/CompaniesOptions"

function ExtraOptions() {
  return (
    <div className="menu-group">
      <StopsOptions />
      <CompaniesOptions />
    </div>
  )
}

export default ExtraOptions
