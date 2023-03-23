import React, { useEffect } from "react"

function ButtonPanel() {
  return (
    <div className="button-group">
      <button className="select-btn">
        <p>САМЫЙ ДЕШЕВЫЙ</p>
      </button>
      <button className="select-btn">
        <p>САМЫЙ БЫСТРЫЙ</p>
      </button>
      <button className="select-btn">
        <p>ОПТИМАЛЬНЫЙ</p>
      </button>
    </div>
  )
}

export default ButtonPanel
