import React, { useEffect } from "react"

import Button from "../misc/Button/Button"

import "./ButtonCluster.css"

function ButtonCluster({ onSortChange }) {
  const handleFastestClick = () => {
    onSortChange("fastest")
  }

  const handleCheapestClick = () => {
    onSortChange("cheapest")
  }

  const handleOptimalClick = () => {
    onSortChange("optimal")
  }

  return (
    <div className="button-group">
      <button className="select-btn" onClick={handleCheapestClick}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className="select-btn middle-btn" onClick={handleFastestClick}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className="select-btn" onClick={handleOptimalClick}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  )
}

export default ButtonCluster
