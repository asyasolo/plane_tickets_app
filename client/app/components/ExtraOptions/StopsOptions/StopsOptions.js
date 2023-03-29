import React, { useEffect } from "react"

import "../shared/shared.css"

function StopsOptions({ filters, onFilterChange }) {
  return (
    <div className="extra">
      <form id="transfer-info">
        <legend>
          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        </legend>

        <div className="input-group">
          <input type="checkbox" name="numStops" value="0" id="no_transfer" onChange={onFilterChange} />
          <label htmlFor="no_transfer">Без пересадок</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_one" name="numStops" value="1" onChange={onFilterChange} />
          <label htmlFor="transfer_one">Одна пересадка</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_two" name="numStops" value="2" onChange={onFilterChange} />
          <label htmlFor="transfer_two">Две пересадки</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_three" name="numStops" value="3" onChange={onFilterChange} />
          <label htmlFor="transfer_three">Три пересадки</label>
        </div>
      </form>
    </div>
  )
}

export default StopsOptions
