import React from "react";
import { useHistory } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  const history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  
  return (
    <div className="Background">
      <div className="tittle">WELCOME TO THE FOOD SITE</div>
      <div className="BtnCont">
        <button className="btn" onClick={handleClick}>GET STARTED</button>
      </div>
      
    </div>
  );
}
