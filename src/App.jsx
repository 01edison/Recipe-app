import React, { useState } from "react";
import Axios from "axios";
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

import { v4 as uuidv4 } from "uuid";

export default function App() {
  const baseUrl = `https://api.edamam.com/api/recipes/v2`;

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(baseUrl, {
        params: {
          app_key: process.env.REACT_APP_KEY,
          app_id: process.env.REACT_APP_ID,
          type: "public",
          q: query,
        },
      });
      setRecipes(result.data.hits);
      console.log(result);
      if (result.data.hits.length > 0) {
        setQuery("");
        setAlert("");
      }else{
        setAlert("No such food! Try again!")
      }
    } else {
      setAlert("Please fill the form!");
    }
  };

  const onChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <>
      <div className="App">
        <h1 onClick={getData}>Food Searching App</h1>
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== "" ? <Alert message={alert} /> : ""}
          <input
            type="text"
            placeholder="Search Food.."
            autoComplete="off"
            name="foodName"
            onChange={onChange}
            value={query}
          />
          <input type="submit" value="Search" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => {
              return (
                <>
                  <Recipe key={uuidv4()} recipe={recipe} />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}
