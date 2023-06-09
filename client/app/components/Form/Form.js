import React, { useEffect, useRef } from "react"

import "./Form.css"

function Form({ filters, onFilterChange }) {
  const ref1 = useRef()
  const ref2 = useRef()

  return (
    <>
      <form className="avia-form">
        <input
          className="avia-form-input"
          type="text"
          placeholder="Откуда"
          name="origin"
          id="origin"
          value={filters.origin}
          onChange={onFilterChange}
        />
        <input
          className="avia-form-input middle-input"
          type="text"
          placeholder="Куда"
          name="destination"
          id="destination"
          value={filters.destination}
          onChange={onFilterChange}
        />
        <input
          className="avia-form-input datepicker-input middle-input"
          type="text"
          name="dateStart"
          id="dateStart"
          value={filters.dateStart}
          onChange={onFilterChange}
          ref={ref1}
          onFocus={() => (ref1.current.type = "date")}
          onBlur={() => (ref1.current.type = "date")}
          placeholder="Туда"
        />
        <input
          className="avia-form-input datepicker-input"
          type="text"
          name="dateEnd"
          id="dateEnd"
          value={filters.dateEnd}
          onChange={onFilterChange}
          ref={ref2}
          onFocus={() => (ref2.current.type = "date")}
          onBlur={() => (ref2.current.type = "date")}
          placeholder="Обратно"
        />
      </form>
    </>
  )
}

export default Form
