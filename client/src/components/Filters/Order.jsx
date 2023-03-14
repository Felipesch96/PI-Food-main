import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanOrder, orderState } from "../../redux/actions";



export default function Order(){
    const selectRecipes = useSelector((state)=> state.recipes);
    const auxRecipes = selectRecipes;
    const dispatch = useDispatch();
    
  
    const handleOrder = (event) => {

        switch (event?.target.value){
            case "asc":
                auxRecipes.sort(function(a,b){
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    if ( b.name.toLowerCase() > a.name.toLowerCase()) return -1;    
                    return 0
                })
                
                return dispatch(orderState(auxRecipes))
            case "des":
                auxRecipes.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
                    if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
                    return 0;
                })     
                            
                return dispatch(orderState(auxRecipes))
            case "lessToMore":
                auxRecipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) return 1;
                    if (b.healthScore > a.healthScore) return -1;
                    return 0;
                    })
                    
                return dispatch(orderState(auxRecipes))   
            case "moreToLess":
                auxRecipes.sort(function (a, b) {
                    if (a.healthScore > b.healthScore) return -1;
                    if (b.healthScore > a.healthScore) return 1;
                    return 0;
                  });
                
                return dispatch(orderState(auxRecipes))
                
            
            default:
                dispatch(cleanOrder());
                return
        };
    };


    return(
    <div>
    <div>
        <label className="pageNumber" htmlFor="diets">Order by: </label>
        <select className="order" onChange={handleOrder}> 
            <option value="-"></option>
            <option value="asc">Alphabetic(A-Z)</option>
            <option value="des">Alphabetic(Z-A)</option>
            <option value="lessToMore">Healthscore (low to high)</option>
            <option value="moreToLess">Healthscore (high to low)</option>
        </select>
    </div>              
    </div>
    )
    };