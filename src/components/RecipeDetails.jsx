import React from "react";

const RecipeDetails = ({ ingredients }) => {
  return (
    <>
      <ul className="ingredient-list">
        {ingredients.map((ingredient) => {
          return (
            <li>
              <div className="ingredient-text">{ingredient.text}</div>
              <div className="ingredient-weight">{ingredient.weight}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default RecipeDetails;
