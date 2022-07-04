import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import { v4 as uuidv4 } from "uuid";

const Recipe = ({ recipe }) => {
  const { label, image, ingredients, url } = recipe.recipe;

  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noreferrer">
          URL
        </a>
        <button
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          Ingredients
        </button>
        {isClicked && (
          <RecipeDetails key={uuidv4()} ingredients={ingredients} />
        )}
      </div>
    </>
  );
};

export default Recipe;
