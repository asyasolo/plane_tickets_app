import React, { useEffect } from "react"

import Button from "../misc/Button/Button"

import "./ButtonCluster.css"

function ButtonCluster() {
  return (
    <div className="button-group">
      <Button className="select-btn" text="САМЫЙ ДЕШЕВЫЙ" />
      <Button className="select-btn" text="САМЫЙ БЫСТРЫЙ" />
      <Button className="select-btn" text="ОПТИМАЛЬНЫЙ" />
    </div>
  )
}

export default ButtonCluster
