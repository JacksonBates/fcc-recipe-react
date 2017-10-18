import React from 'react';
import Recipe from './Recipe';

const Recipes = (props) => {
return (
    <div>
      {props.recipes.map((recipe, i) => {
        return (
          <Recipe 
            key={i} 
            name={recipe.name} 
            ingredients={recipe.ingredients} 
            expanded='true' 
            {...props}
          />
        )
      })}
    </div>
  )
}

export default Recipes;
