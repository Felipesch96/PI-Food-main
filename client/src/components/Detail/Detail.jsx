import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { cleanDetail, getRecipeById } from "../../redux/actions";
import './Detail.css';

export default function Detail(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  
  useEffect(() => {
   dispatch(getRecipeById(id));
   return dispatch(cleanDetail());
  }, [dispatch, id]); 


  const aux = [];
  if (detail.createdInDb) detail.diets.map(element=>aux.push(element.name));
  if (!detail.createdInDb) detail.diets?.map(element=>aux.push(element));

  return (
    <div>
      {detail.name ? (<div className="detailCont">  
          <h1 className="detName"> {detail.name} </h1>
          <img className="detImg" src={detail.img? detail.img: null} alt="img"/>
          {detail.diets.length ? <h3 className="detDiet">Diets: {aux.join(", ")}</h3>:null}
          {detail.healthScore ? <h5 className="detHS">healthScore: {detail.healthScore}</h5>:null}
          <p className="dtltext">RESUME: {detail.resume}</p>
          {detail.steps ? <p className="dtltext">STEPS: {detail.steps? detail.steps: null}</p>:null}
        </div>
      ) : (
        <div>
          <h2> loading... </h2>
        </div>
      )}
    </div>
  );
}
