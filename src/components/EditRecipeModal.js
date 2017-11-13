import React from 'react';
import Modal from 'react-modal';

const EditRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.recipes[props.index].editModalOpen}
      onRequestClose={props.handleCloseEditModal}
    >
      <h3>Edit the recipe</h3>
      <form onSubmit={props.handleEditRecipe}>
        <label htmlFor='recipeInput'>Recipe</label><br />
        <input 
          name='recipeInput' 
          type='text' 
          placeholder='Recipe name'
          defaultValue={props.recipes[props.index].name} /><br />
        <label htmlFor='ingredientsInput'>Ingredients</label><br />
        <input 
          name='ingredientsInput' 
          type='text' 
          placeholder='Ingredients should be comma separated'
          defaultValue={props.ingredients} /><br />
        <button>Save edit</button>
        <button onClick={(e) => {
          e.preventDefault;

          props.handleCloseEditModal(props.index);
          }}
        >
          Cancel edit
        </button>
      </form>

    </Modal>
  )
}

export default EditRecipeModal;