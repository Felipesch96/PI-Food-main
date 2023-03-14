import React from "react";
import { Link } from "react-router-dom";
import './Recipe.css';

const Recipe = ({ recipe }) => {
  const aux = [];
  if (recipe.createdInDb){
    recipe.diets.map(element=>aux.push(element.name))
  } else {
    recipe.diets.map(element=>aux.push(element))
  }
  return (
    <Link className="card" to={`/home/detail/${recipe.id}`}>
      <span>
        <h3 className="recipeName">{recipe.name}</h3>
        <img className="img" src={recipe.img} alt="img" />
        {aux.length?<h3 className="diets">Diets: {aux.join(", ")}</h3>:null}      
      </span>
      </Link>
  )
};

export default Recipe;
