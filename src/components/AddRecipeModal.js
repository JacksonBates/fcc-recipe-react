import React from 'react';
import Modal from 'react-modal';

const AddRecipeModal = (props) => {
  return (
    <Modal
      isOpen={props.addModalOpen}
      onRequestClose={props.handleCloseAdd}
    >
      <h3>Modal</h3>
    </Modal>
  )
}

export default AddRecipeModal;