import React from "react";
import { useLocation } from 'react-router-dom';

const MovieDetail = () => {
  const { state } = useLocation();
  console.log(state);

  return (
  <div className="row" >
    <div 
        className="card col" 
       
        >
        <img src={`https://image.tmdb.org/t/p/w1280${state.poster_path}`} alt="image" />
        </div>
        <div className="bg-primary col">
          <h3 className="card-title text-center text-light ">{state.title}</h3>
          <p className="overview card-text text-hover">{state.overview}</p>
        </div>
  </div>
  )
};

export default MovieDetail;
