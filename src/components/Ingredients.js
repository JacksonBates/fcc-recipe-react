import React from 'react';

const Ingredients = (props) => {
  return (
    <div>
      <ul>
        {
          props.ingredients.split(',').map((ingredient, i) => {
            return (
              <li 
                key={i}
                className="recipe__list-item"
              >
                {ingredient}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Ingredients;