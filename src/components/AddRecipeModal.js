import React from 'react';
import Modal from 'react-modal';

const AddRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.addModalOpen}
      onRequestClose={props.handleCloseAdd}
      className='modal'
    >
      <h1 className='modal__title'>Add a recipe</h1>
      <div className='modal__body'>
        <form onSubmit={props.addRecipe}>
          <label 
            className='modal__label'
            htmlFor='recipeInput'
          >
            Recipe
          </label>
          <input 
            name='recipeInput' 
            type='text' 
            className='modal__text-input'
            placeholder='Recipe name' 
          />
          <label 
            className='modal__label'
            htmlFor='ingredientsInput'
          >
            Ingredients
          </label>
          <input 
            name='ingredientsInput' 
            type='text' 
            className='modal__text-input'
            placeholder='Ingredients should be comma separated' 
          />
          <button className='modal__add-button'>Add</button>
        </form>
      </div>

    </Modal>
  )
}

export default AddRecipeModal;