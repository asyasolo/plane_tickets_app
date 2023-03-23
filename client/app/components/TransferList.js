import React, { useEffect } from "react"

function TransferList() {
  return (
    <>
      <div className="extra">
        <div className="extra-inner">
          <form id="transfer-info">
            <legend>
              <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            </legend>

            <div className="input-group">
              <input type="checkbox" id="no_transfer" name="transfer" value="no_transfer" />
              <label for="no_transfer">Без пересадок</label>
            </div>

            <div className="input-group">
              <input type="checkbox" id="transfer_one" name="transfer" value="transfer_one" />
              <label for="transfer_one">Одна пересадка</label>
            </div>

            <div className="input-group">
              <input type="checkbox" id="transfer_two" name="transfer" value="transfer_two" />
              <label for="transfer_two">Две пересадки</label>
            </div>

            <div className="input-group">
              <input type="checkbox" id="transfer_three" name="transfer" value="transfer_three" />
              <label for="transfer_three">Три пересадки</label>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default TransferList
