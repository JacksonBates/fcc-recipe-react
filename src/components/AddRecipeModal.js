import React from 'react';
import Modal from 'react-modal';

const AddRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.addModalOpen}
      onRequestClose={props.handleCloseAdd}
      className='modal'
    >
      <h3 className='modal__title'>Add a recipe</h3>
      <div className='modal__body'>
        <form onSubmit={props.addRecipe}>
          <label htmlFor='recipeInput'>Recipe</label><br />
          <input name='recipeInput' type='text' placeholder='Recipe name' /><br />
          <label htmlFor='ingredientsInput'>Ingredients</label><br />
          <input name='ingredientsInput' type='text' placeholder='Ingredients should be comma separated' /><br />
          <button>Add</button>
        </form>
      </div>

    </Modal>
  )
}

export default AddRecipeModal;