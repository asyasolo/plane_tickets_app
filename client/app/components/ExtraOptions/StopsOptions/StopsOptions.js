import React, { useEffect } from "react"

import "../shared/shared.css"

function StopsOptions() {
  return (
    <div className="extra">
      <form id="transfer-info">
        <legend>
          <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        </legend>

        <div className="input-group">
          <input type="checkbox" id="no_transfer" name="transfer" value="no_transfer" />
          <label htmlFor="no_transfer">Без пересадок</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_one" name="transfer" value="transfer_one" />
          <label htmlFor="transfer_one">Одна пересадка</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_two" name="transfer" value="transfer_two" />
          <label htmlFor="transfer_two">Две пересадки</label>
        </div>

        <div className="input-group">
          <input type="checkbox" id="transfer_three" name="transfer" value="transfer_three" />
          <label htmlFor="transfer_three">Три пересадки</label>
        </div>
      </form>
    </div>
  )
}

export default StopsOptions
