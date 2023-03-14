import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { cleanState, getRecipes } from "../../redux/actions";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault(event);
    dispatch(getRecipes(search));
    dispatch(cleanState)
    setSearch("");
  }
  function handleInput(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
     <form onSubmit={(event) => {handleSubmit(event)}}>
     <input type='text' placeholder='Search a recipe...' value={search} onChange={(event) => {handleInput(event)}} className="input"></input>
     <button  type='submit'>search</button>
     </form>

     </div>
  );
}
