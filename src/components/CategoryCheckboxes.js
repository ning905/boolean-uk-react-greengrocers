export const CategoryCheckboxes = props => {
  return (
    <div className="category-checkboxes">
      <input type="checkbox" id="fruit" name="item-category" value="Fruit" />
      <label for="fruit">Fruit</label>

      <input
        type="checkbox"
        id="vegetable"
        name="item-category"
        value="Vegetable"
      />
      <label for="vegetable">Vegetable</label>
    </div>
  )
}
