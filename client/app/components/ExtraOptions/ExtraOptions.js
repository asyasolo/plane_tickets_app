import React, { useEffect } from "react"

import "./ExtraOptions.css"

import StopsOptions from "./StopsOptions/StopsOptions"
import CompaniesOptions from "./CompaniesOptions/CompaniesOptions"

function ExtraOptions({ filters, onFilterChange, onCompanyChange }) {
  return (
    <div className="menu-group">
      <StopsOptions
        filters={filters}
        onFilterChange={onFilterChange}
      />
      <CompaniesOptions
        filters={filters}
        onCompanyChange={onCompanyChange}
      />
    </div>
  )
}

export default ExtraOptions
