import React from 'react';

const DeleteRecipe = (props) => {
  return (
      <div className="recipe__delete">
        <button 
          // name={props.name} 
          className="recipe__button"
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
  
  