import React from "react";

export default function Pagination ({recipesPerPage, allRecipes, paginate, currentPage}) {
   const pageNumbers = []
      for (let i = 0 ; i < Math.ceil(allRecipes/recipesPerPage) ; i++) pageNumbers.push(i+1); 
   
   return (      
      <nav>
         <b>
         <button onClick={() => (currentPage - 1) > 0 ? paginate(currentPage-1):null}>Prev</button>
         </b>
            <b>
                  {
                     pageNumbers && pageNumbers.map(element => (
                        <b key={element}  >
                        <button onClick= {() => paginate(element)} >{element}</button>
                        </b>
                     ))
                  }
         </b>
         <b>
         <button onClick={() => (currentPage) < pageNumbers.length ? paginate(currentPage+1):null}>Next</button>
         </b>
      </nav>
               
   )
}