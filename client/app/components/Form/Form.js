import React, { useEffect, useRef } from "react"

import "./Form.css"

function Form() {
  const ref1 = useRef()
  const ref2 = useRef()

  return (
    <>
      <form className="avia-form">
        <input className="avia-form-input" type="text" placeholder="Откуда" />
        <input className="avia-form-input" type="text" placeholder="Куда" />
        <input className="avia-form-input datepicker-input" type="text" ref={ref1} onChange={e => console.log(e.target.value)} onFocus={() => (ref1.current.type = "date")} onBlur={() => (ref1.current.type = "date")} placeholder="Туда" />
        <input className="avia-form-input datepicker-input" type="text" ref={ref2} onChange={e => console.log(e.target.value)} onFocus={() => (ref2.current.type = "date")} onBlur={() => (ref2.current.type = "date")} placeholder="Обратно" />
      </form>
    </>
  )
}

export default Form
