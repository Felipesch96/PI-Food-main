import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { cleanError, cleanState, getDiets, postRecipes } from "../../redux/actions";
import "./CreateRecipe.css";

export default function Form() {
    const dispatch = useDispatch();
    const history = useHistory();
    const selectDiets = useSelector((state) => state.diets);
    const selectSuccess = useSelector((state)=> state.success);
    const selectError = useSelector((state)=> state.error);
    
    
    useEffect(() => {
        
        if (selectDiets.length === 0) dispatch(getDiets());
        if (selectSuccess.msg){
            setTimeout(function(){
                dispatch(cleanState());
                history.push("/home");
            }, 2500);
        }
        if (selectError.response){
            setTimeout(function(){
                dispatch(cleanError());
            }, 4000);
        }
    }, [dispatch, selectDiets, selectSuccess, selectError, history]);


    const [input, setInput] = useState({
        name:"",
        resume: "",
        healthscore: "",
        steps: "",
        image: "",
        diets:[],
    });
    
    const [error,setErrors] = useState({});
    
    useEffect(()=>{
        setErrors(validateInput(input))
    },[input]);

    const validateInput = (input) =>{
        const reg = new RegExp('^[0-9]*$');
        const error = {};
        if (input.name.length<5) error.name = "You must enter a name";
        if (input.resume.length<15) error.resume = "You must write down a short resume of the recipe";
        if(input.healthscore<0 || input.healthscore>100 || !reg.test(input.healthscore)) error.healthscore='The healthscore must be between 0 and 100 (write only numbers)'
        return error;
    }

    const handleInput = (event) => {
        event.preventDefault()
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }  
    
    function handleSubmit(event) {
        event.preventDefault();
        try{
            if (!Object.keys(error).length) {
                dispatch(postRecipes(input)); 
                setInput({
                    name:"",
                    resume: "",
                    healthscore: "",
                    steps: "",
                    image: "",
                    diets:[],  
                })                      
                } else {
                    alert("Please fill the form correctly")
                }
        }catch (error){
            alert (error)
        };
    };

    const handleDiets = (event) => {
        event.preventDefault()
        if (!input.diets.includes(event.target.value))
        setInput({
            ...input,
            diets: [...input.diets, event.target.value]
        })
    }

    function handleDelete(element){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== element )
        });
    };
    

  
    return (
      <div className="createContainer"> 
        {selectSuccess.msg?<div className="success">{selectSuccess.msg}</div>:null}
        {selectError.response?.data?<div className="error">{selectError.response?.data.error}</div>:null}
          <h3 className="create">CREATE A NEW RECIPE</h3>
          <form onSubmit={handleSubmit}>             
              <div>
                  <input className="createInput" placeholder="Name..." type="text" name="name" value={input.name} onChange={handleInput}/>
                  <p className="inputError">{error.name && error.name}</p>
              </div>

              <div>
                  <input className="createInput" placeholder="Resume..." type="text" name="resume" value={input.resume} onChange={handleInput}/>
                  <p className="inputError">{error.resume && error.resume}</p>
              </div>              
              
              <div>
                  <input className="createInput" placeholder="Healthscore..." type="text" name="healthscore" value={input.healthscore} onChange={handleInput}/>
                  <p className="inputError">{error.healthscore && error.healthscore}</p>
              </div>              
              
              <div>
                  <input className="createInput" placeholder="Instructions, steps..." type="text" name="steps" value={input.steps} onChange={handleInput}/>
              </div>

              <div>
                  <input className="createInput" placeholder="Image (paste URL)..." type="text" name="image" value={input.image} onChange={handleInput}/>
              </div>
              
              <div>
                  <select placeholder="Diets..." onChange={handleDiets} className="cuco"> 
                  if (selectDiets) {
                      selectDiets.map((diet) => {
                        return ( 
                            <option key={diet.id} value={diet.name}>{diet.name}</option>
                          )
                      })
                   };
                  </select>
              </div>              
              <hr/>

              {error.hasOwnProperty('name') || error.hasOwnProperty('resume') || error.hasOwnProperty('healthscore')?  <p className="msgbtn"> Please complete your recipe before submitting it</p> : <button type='submit'>Create Recipe</button>  }
              
          </form>
          <hr/> 

          {input.diets.length?<div>Diets selected:</div>:null}
          {input.diets.map(element => {
               return(
               <div key={element}>
                    <h5 className="cuco">{element}</h5>
                    <button  className="cuco" onClick={() => handleDelete(element)}>X</button>
                   
                </div>
                
            )})}
               
      </div> 
  )

};
