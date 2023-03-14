import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrder, cleanState, getRecipes } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import Recipe from "../Recipe/Recipe";
import './Home.css';

export default function Home(){
  
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const error = useSelector((state) => state.error);
  const order = useSelector((state) => state.order);
  const recipesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1); 
  const lastIndex = currentPage * recipesPerPage; 
  const selectFilter = useSelector((state) => state.filter)
  const firstIndex = lastIndex - recipesPerPage; 
  const [currentRecipes, setCurrentRecipes] = useState([]);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    if (recipes.length === 0) dispatch(getRecipes(""));
    if (order === true) dispatch(cleanOrder());
    setCurrentRecipes([...recipes].slice(firstIndex, lastIndex));
    if (selectFilter && currentPage > (recipes.length/9)) setCurrentPage(1);
  }, [dispatch, recipes.length, order, recipes, firstIndex, lastIndex, selectFilter, currentPage ]);

  useEffect(()=>{
    if (error.response){
      setTimeout(function(){
        dispatch(cleanState());  
    }, 3000);
    }
  })
  

if (currentRecipes.length) {
      return (
      <div className="background">
        <div className="paginated">
          <Pagination recipesPerPage={recipesPerPage} allRecipes={recipes.length} paginate={paginate} currentPage={currentPage}/>
        </div>
        <div className="pageNumber">PAGE: {currentPage}</div>
        <div className="cards">
          {error.response?<div className="fade"><div className="error">ERROR: {error.response?.data.error}</div></div>:null}
          {currentRecipes.map((recipe) => (
            <Recipe key={recipe.id} recipe={recipe} />
          ))};
        </div>
      </div>
      );
      
  } else {
    return (
        <div className="loadingAll">
        <div className="fade">{error.response?<div className="error">ERROR: {error.response?.data.error}</div>:null}</div>
        <div className="loading">Loading...</div>
        <div><img className="image" src="https://media.giphy.com/media/gpkXtSuTe7iec/giphy.gif" alt="img"/></div>        
      </div>
    );
  }
};