import React from 'react';
import Recipes from './Recipes';
import AddRecipeModal from './AddRecipeModal';
import EditRecipeModal from './EditRecipeModal';

export default class RecipeBookApp extends React.Component {
  state = {
    addModalOpen: false,
    editModalOpen: false,
    recipes: [
      {
        name: 'Chilli',
        ingredients: 'brown rice, minced beef, onions, chilli powder, jalapenos, too much cumin, cocoa powder (trust me), kidney beans, corn, sour cream, cerveza',
        visible: false
      },
      {
        name: 'Mashed Potatoes',
        ingredients: 'Large brushed sebagos, full cream, extra virgin olive oil, butter, black pepper',
        visible: false
      }
    ]
  }
  handleAdd = () => {
    this.setState(() => ({ addModalOpen: true }));
  }
  handleCloseAdd = () => {
    this.setState(() => ({ addModalOpen: false }));
  }
  addRecipe = (e) => {
    e.preventDefault();
    
    const name = e.target.elements.recipeInput.value.trim();
    const ingredients = e.target.elements.ingredientsInput.value.trim();
    
    const recipe = {
      name, 
      ingredients,
      visible: false
    }

    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();
    stateCopy.recipes.push(recipe);
    stateCopy.addModalOpen = false;
    this.setState(() => (stateCopy))
  }
  openEditRecipeModal = () => {
    this.setState(() => ({ editModalOpen: true }));
  }
  handleCloseEditModal = () => {
    this.setState(() => ({ editModalOpen: false }));
  }
  handleVisibility = (key) => {
    // Creates a copy of the state object to work on
    // then sets the copy as the new state
    // modified from: https://stackoverflow.com/questions/35174489/reactjs-setstate-of-object-key-in-array
    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes = stateCopy.recipes.slice();
    // resets all visibility, except for the target recipe
    stateCopy.recipes.forEach((recipe) => {
      if (recipe.name !== stateCopy.recipes[key].name) {
        recipe.visible = false;
      }
    });
    // Toggles the visibility of the target recipe
    stateCopy.recipes[key] = Object.assign({}, stateCopy.recipes[key]);
    stateCopy.recipes[key].visible = !stateCopy.recipes[key].visible;
    this.setState(() => (stateCopy));
  }
  handleDeleteRecipe = (index) => {
    const stateCopy = Object.assign({}, this.state);
    stateCopy.recipes.splice(index, 1);
    this.setState(() => (stateCopy));
  }
  handleEditRecipe = (e) => {
    // do stuff

  }
  render() {
    return (
      <div>
        <Recipes 
          {...this.state} 
          handleVisibility={this.handleVisibility}
          handleEditRecipe={this.handleEditRecipe}
          handleDeleteRecipe={this.handleDeleteRecipe}
          openEditRecipeModal={this.openEditRecipeModal}
        />
        <button 
          name='add-recipe' 
          onClick={this.handleAdd}
        >
          Add Recipe
        </button>
        <AddRecipeModal 
          {...this.state} 
          handleCloseAdd={this.handleCloseAdd}
          addRecipe={this.addRecipe}
        />
        <EditRecipeModal
          {...this.state}
          handleCloseEditModal={this.handleCloseEditModal}
          openEditRecipeModal={this.openEditRecipeModal}
        />
      </div>
    )
  }
}