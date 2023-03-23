import React, { useEffect } from "react"

function CompanyList() {
  return (
    <>
      <div className="extra">
        <div className="extra-inner">
          <form id="company_list">
            <legend>
              <p>КОМПАНИЯ</p>
            </legend>

            <input type="radio" id="company_all" name="company" value="company_all" />
            <label for="company_all">Все</label>

            <input type="radio" id="company_s_seven" name="company" value="s_seven" />
            <label for="company_s_seven">S7 Airlines</label>

            <input type="radio" id="company_xiamenAir" name="company" value="xiamenAir" />
            <label for="company_xiamenAir">XiamenAir</label>
          </form>
        </div>
      </div>
    </>
  )
}

export default CompanyList
