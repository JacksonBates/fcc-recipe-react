import React from 'react';
import DeleteRecipe from './DeleteRecipe';

const Recipe = (props) => {
return (
    <div>
      <button 
        // key={props.key}
        // index={props.key}
        name={props.name} 
        onClick={(e) => {
          props.handleVisibility(props.index)
        }}
      >
        {props.name}
      </button>
      <br />
      {props.visible && props.ingredients}
      {props.visible && <DeleteRecipe {...props} />}
    </div>
  )
}

export default Recipe;

