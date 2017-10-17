import React from 'react';

export default class Recipes extends React.Component {
  
  render() {
    return (
      <div>
        {this.props.recipes.map((recipe, i) => {
          return (
            <li key={i}>{recipe.name}</li>
        )})}
      </div>
    )
  }
}
