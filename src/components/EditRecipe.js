import React from 'react';

const EditRecipe = (props) => {
  return (
      <div className="recipe--edit">
        <button
          className="recipe--button"
          onClick={(e) => {
            props.openEditRecipeModal(props.index);
          }
        }
        >
          Edit
        </button>
      </div>
  )
}

export default EditRecipe;