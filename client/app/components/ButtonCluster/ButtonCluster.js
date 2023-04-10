import React, { useEffect, useState } from "react"

import "./ButtonCluster.css"

function ButtonCluster({ onSortChange }) {
  const [activeButton, setActiveButton] = useState(null)

  const activeClass = "active-btn"
  const inactiveClass = "select-btn"

  const handleFastestClick = () => {
    onSortChange("fastest")
  }

  const handleCheapestClick = () => {
    onSortChange("cheapest")
  }

  const handleOptimalClick = () => {
    onSortChange("optimal")
  }

  const handleClick = buttonName => {
    setActiveButton(buttonName)
  }

  return (
    <div className="button-group">
      <button className={`left-btn ${activeButton === "cheapest" ? activeClass : inactiveClass}`} onClick={handleCheapestClick} onMouseDown={() => handleClick("cheapest")}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={`middle-btn ${activeButton === "fastest" ? activeClass : inactiveClass}`} onClick={handleFastestClick} onMouseDown={() => handleClick("fastest")}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={`right-btn ${activeButton === "optimal" ? activeClass : inactiveClass}`} onClick={handleOptimalClick} onMouseDown={() => handleClick("optimal")}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default ButtonCluster
