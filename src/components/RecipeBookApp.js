import React from 'react';
import Recipes from './Recipes';

export default class RecipeBookApp extends React.Component {
  state = {
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
    alert('Edit button clicked');
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
  render() {
    return (
      <div>
        <Recipes 
          {...this.state} 
          handleVisibility={this.handleVisibility} 
        />
        <button 
          name='add-recipe' 
          onClick={this.handleAdd}
        >
          Add Recipe
        </button>
      </div>
    )
  }
}