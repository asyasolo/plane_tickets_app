import React, { useEffect } from "react"

function DestinationPanel() {
  return (
    <>
      <form className="avia-form">
        <input className="avia-form-input" type="text" placeholder="Откуда" />
        <input className="avia-form-input" type="text" placeholder="Куда" />
        <input className="avia-form-input" type="text" placeholder="Когда" />
        <input className="avia-form-input" type="text" placeholder="Обратно" />
      </form>
    </>
  )
}

export default DestinationPanel
