import React from 'react';

const Ingredients = (props) => {
  return (
    <div>
      <ul>
        {
          props.ingredients.split(',').map((ingredient, i) => {
            return (
              <li key={i}>{ingredient}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Ingredients;