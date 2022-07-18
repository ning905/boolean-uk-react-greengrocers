import { useState } from 'react'
import '../styles/category-checkboxes.css'

export const CategoryCheckboxes = props => {
  const { addFilter, removeFilter } = props
  const [onDisplay, setOnDisplay] = useState(false)

  const toggleDisplay = () => {
    setOnDisplay(!onDisplay)
  }

  const changeFilter = e => {
    if (e.target.checked) {
      addFilter(e.target.value)
    } else {
      removeFilter(e.target.value)
    }
  }

  return (
    <div className="category-sorting-wrap">
      <div className="category-sorting-heading" onClick={toggleDisplay}>
        Category 🔽
      </div>
      <div
        className="category-sorting-checkboxes"
        style={{ display: onDisplay ? 'flex' : 'none' }}
      >
        <div className="category-sorting-checkbox">
          <input
            type="checkbox"
            id="fruit"
            name="item-category"
            value="fruit"
            onChange={e => changeFilter(e)}
          />
          <label for="fruit">Fruit</label>
        </div>

        <div className="category-sorting-checkbox">
          <input
            type="checkbox"
            id="vegetable"
            name="item-category"
            value="vegetable"
            onChange={e => changeFilter(e)}
          />
          <label for="vegetable">Vegetable</label>
        </div>
      </div>
    </div>
  )
}
