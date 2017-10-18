import React from 'react';

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
    </div>
  )
}

export default Recipe;

