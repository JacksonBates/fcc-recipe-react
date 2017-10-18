import React from 'react';

const Recipe = (props) => {
return (
    <div>
      <button 
        name={props.name} 
        onClick={props.handleVisibility}
      >
        {props.name}
      </button>
      <br />
      {props.visible && props.ingredients}
    </div>
  )
}

export default Recipe;

