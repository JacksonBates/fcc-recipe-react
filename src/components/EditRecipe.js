import React from 'react';

const EditRecipe = (props) => {
  return (
      <div>
        <button
          onClick={(e) =>
            props.openEditRecipeModal(e)
          }
        >
          Edit
        </button>
      </div>
  )
}

export default EditRecipe;