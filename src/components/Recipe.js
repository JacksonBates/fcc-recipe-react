import React from 'react';
import EditRecipe from './EditRecipe';
import DeleteRecipe from './DeleteRecipe';
import EditRecipeModal from './EditRecipeModal';

const Recipe = (props) => {
return (
    <div className="recipe">
      <button 
        name={props.name} 
        className="recipe--name"
        onClick={(e) => {
          props.handleVisibility(props.index)
        }}
      >
        {props.name}
      </button>
      <br />
      {props.visible && props.ingredients}
      {props.visible && <EditRecipe {...props} />}      
      {props.visible && <DeleteRecipe {...props} />}
      <EditRecipeModal
        {...props}
    />
    </div>
  )
}

export default Recipe;

