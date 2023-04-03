import React, { useEffect } from "react"

import "../shared/shared.css"

function CompaniesOptions({ filters, onCompanyChange }) {
  return (
    <div className="extra">
      <form id="company_list">
        <legend>
          <p>КОМПАНИЯ</p>
        </legend>

        <div className="input-group">
          <input className="radio-btn" onChange={onCompanyChange} type="radio" id="company_all" name="company" value="all" />
          <label htmlFor="company_all">Все</label>
        </div>

        <div className="input-group">
          {/*изменить value*/}
          <input className="radio-btn" onChange={onCompanyChange} type="radio" id="company_s_seven" name="company" value="cddfa038-823b-43b1-b18d-395731881077" />
          <label htmlFor="company_s_seven">S7 Airlines</label>
        </div>
        <div className="input-group">
          {/*изменить value*/}
          <input className="radio-btn" onChange={onCompanyChange} type="radio" id="company_xiamenAir" name="company" value="7dc12d0b-ce42-48a0-8673-0dad4d698764" />
          <label htmlFor="company_xiamenAir">XiamenAir</label>
        </div>
      </form>
    </div>
  )
}

export default CompaniesOptions
