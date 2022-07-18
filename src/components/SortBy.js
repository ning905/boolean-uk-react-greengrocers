import { useState } from 'react'

export const SortBy = props => {
  const { selectSortBy } = props
  const [onDisplay, setOnDisplay] = useState(true)
  const toggleDisplay = () => {
    setOnDisplay(!onDisplay)
  }

  return (
    <div className="category-sorting-wrap">
      <div className="category-sorting-heading" onClick={toggleDisplay}>
        Sort By...
      </div>

      <div
        className="category-sorting-checkboxes"
        style={{ display: onDisplay ? 'flex' : 'none' }}
      >
        <div className="category-sorting-checkbox">
          <input
            type="radio"
            id="price"
            name="item-sort-by"
            value="price"
            onChange={e => selectSortBy(e.target.value)}
          />
          <label for="price">Price</label>
        </div>

        <div className="category-sorting-checkbox">
          <input
            type="radio"
            id="name"
            name="item-sort-by"
            value="name"
            onChange={e => selectSortBy(e.target.value)}
          />
          <label for="name">Name</label>
        </div>
      </div>
    </div>
  )
}
