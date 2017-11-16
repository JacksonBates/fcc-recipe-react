import React from 'react';
import EditRecipe from './EditRecipe';
import DeleteRecipe from './DeleteRecipe';
import EditRecipeModal from './EditRecipeModal';
import Ingredients from './Ingredients';

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
      {props.visible && <Ingredients {...props} />}
      <div className="recipe--button-bar">
        {props.visible && <EditRecipe {...props} />}      
        {props.visible && <DeleteRecipe {...props} />}
      </div>
      <EditRecipeModal
        {...props}
    />
    </div>
  )
}

export default Recipe;

