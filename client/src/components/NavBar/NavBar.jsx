import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { cleanSearch, cleanState } from "../../redux/actions";
import Filters from "../Filters/Filters";
import Order from "../Filters/Order";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

export default function NavBar(props){

    const selectFilter = useSelector((state)=> state.filter);
    const selectSearch = useSelector((state)=> state.search);
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(cleanSearch());
    };

    function handleClick1(){
        dispatch(cleanState());
    };
        

    return(
        <nav className="nav">
            <span className="container">
                
                <span><Route exact path="/home/form"><Link className="link" to="/home/">HOME</Link></Route></span>

                <span><Route exact path="/home/about"><Link className="link" to="/home/">HOME</Link></Route></span>

                <span><Route exact path="/home"><Link className="link" to="/home/form">CREATE RECIPE</Link></Route></span>

                <span><Route exact path="/home/about"><Link className="link" to="/home/form">CREATE RECIPE</Link></Route></span>

                <span><Route exact path="/home/detail/:id"><Link className="link" to="/home/">BACK</Link></Route></span>
                
                {!selectFilter?<span><Route exact path="/home"><SearchBar/></Route></span>:null}

                {selectSearch === true && !selectFilter?<span><Route exact path="/home"><button onClick={handleClick}>BACK</button></Route></span>:null}
                
                <span><Route exact path="/home"><Filters/></Route></span>

                <span><Route exact path="/home"><Order/></Route></span>
                
                {selectFilter?<span><Route exact path="/home"><button onClick={handleClick1}>Clean Filter</button></Route></span>:null}

                <span><Route exact path="/home"><Link className="link" to ="/home/about">ABOUT</Link></Route></span>
                    
           
           </span>         
            
        </nav>
        
    )
}