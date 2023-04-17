import React, { useEffect, useState } from "react"

import "./ButtonCluster.css"

function ButtonCluster({ onSortChange }) {
  const [activeButton, setActiveButton] = useState(null)

  const activeClass = "active-btn"
  const inactiveClass = "select-btn"

  const handleFastestClick = () => {
    handleClick("fastest")
    onSortChange("fastest")
  }

  const handleCheapestClick = () => {
    handleClick("cheapest")
    onSortChange("cheapest")
  }

  const handleOptimalClick = () => {
    handleClick("optimal")
    onSortChange("optimal")
  }

  const handleClick = buttonName => {
    setActiveButton(buttonName)
  }

  return (
    <div className="button-group">
      <button
        className={`left-btn ${activeButton === "cheapest" ? activeClass : inactiveClass}`}
        onClick={handleCheapestClick}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`middle-btn ${activeButton === "fastest" ? activeClass : inactiveClass}`}
        onClick={handleFastestClick}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`right-btn ${activeButton === "optimal" ? activeClass : inactiveClass}`}
        onClick={handleOptimalClick}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default ButtonCluster
