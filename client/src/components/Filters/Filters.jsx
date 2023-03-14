import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanState, filterState } from "../../redux/actions";



export default function Filters(){
   const dispatch = useDispatch();
   const selectRecipes = useSelector((state)=> state.recipes);
   const auxRecipe = selectRecipes;
   let filterRecipes = [];

   useEffect(()=>{
      if (filterRecipes.length) dispatch(cleanState())
   },[dispatch, filterRecipes.length])

   const handleScore = (event) => {  
      
      if (event.target.value === "70"){
         filterRecipes= auxRecipe.filter(element => element.healthScore >= 70)
      }
      dispatch(filterState(filterRecipes))
   }
   

   const handleDiets = (event) => {  
      filterRecipes = [];
      if (event?.target.value !== "All"){
         auxRecipe.map((element) => {
            const aux = element;
            if (element.diets[0]?.name) {
               element.diets.map((element) => {
                  if (element.name === event.target.value) {
                     filterRecipes.push(aux);
                  }
                  return filterRecipes;
               });
            } else if (element.diets) {
               element.diets.map((element) => {
                  if (element === event.target.value) {
                     filterRecipes.push(aux);
                  }
                  return filterRecipes;
            
               });
            };
            return filterRecipes;
         });
         if (filterRecipes.length){
            dispatch(filterState(filterRecipes))
         } else {
            alert ("Couldn't find recipes associated with that diet type")
            dispatch(cleanState());

         }
      };
   };


   return(
    <div>
      <div>
         <label className="pageNumber" htmlFor="diets">Healthscore: </label>
         <select onChange={handleScore}> 
            <option value="70"></option>
            <option value="70">HEALTHSCORE MAYOR A 70</option>
         </select>
      </div>
      <div>
         <label className="pageNumber" htmlFor="diets">Filter by diets: </label>
         <select onChange={handleDiets}> 
            <option value="All"></option>
            <option value="gluten free">Gluten Free</option>
            <option value="paleolithic">Paleolithic</option>
            <option value="vegetarian">Vegetarian </option>
            <option value="lacto ovo vegetarian">Lacto-ovo vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
            <option value="primal">Primal</option>
            <option value="whole 30">Whole 30</option>
            <option value="fodmap friendly">Fodmap friendly</option>
            <option value="dairy free">Dairy free</option>
            <option value="ketogenic">Ketogenic</option>
         </select>
      </div>
         
    </div>
   )
};
