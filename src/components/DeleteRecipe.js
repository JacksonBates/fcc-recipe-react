import React from 'react';

const DeleteRecipe = (props) => {
  return (
      <div>
        <button 
          // name={props.name} 
          className="recipe--button"
          onClick={(e) => {
            // alert('delete pressed');
            props.handleDeleteRecipe(props.index);
          }}
        >
          Delete
        </button>
      </div>
    )
  }
  
export default DeleteRecipe;
  
  