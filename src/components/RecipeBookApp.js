import React from 'react';
import Recipes from './Recipes';

export default class RecipeBookApp extends React.Component {
  state = {
    recipes: [
      {
        name: 'Chilli',
        ingredients: 'brown rice, minced beef, onions, chilli powder, jalapenos, too much cumin, cocoa powder (trust me), kidney beans, corn, sour cream, cerveza'
      },
      {
        name: 'Mashed Potatoes',
        ingredients: 'Large brushed sebagos, full cream, extra virgin olive oil, butter, black pepper'
      }
    ],
    visibleRecipe: undefined
  }
  handleEdit() {
    alert('Edit button clicked');
  }
  handleVisibility() {
    alert('Will toggle visibility');
  }
  render() {
    return (
      <div>
        <Recipes {...this.state} handleVisibility={this.handleVisibility} />
        <button name='edit-recipes' onClick={this.handleEdit}>Edit</button>
      </div>
    )
  }
}