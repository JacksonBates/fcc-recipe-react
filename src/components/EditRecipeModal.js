import React from 'react';
import Modal from 'react-modal';

const EditRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.editModalOpen}
      onRequestClose={props.handleCloseEditModal}
    >
      <h3>Edit the recipe</h3>
      <form onSubmit={props.editRecipeModal}>
        <label htmlFor='recipeInput'>Recipe</label><br />
        <input name='recipeInput' type='text' placeholder='Recipe name' /><br />
        <label htmlFor='ingredientsInput'>Ingredients</label><br />
        <input name='ingredientsInput' type='text' placeholder='Ingredients should be comma separated' /><br />
        <button>Save edit</button>
        <button onClick={(e) => {
          e.preventDefault;

          props.handleCloseEditModal;
          }}
        >
          Cancel edit
        </button>
      </form>

    </Modal>
  )
}

export default EditRecipeModal;