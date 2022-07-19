import { borderRadius, padding } from "@mui/system";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const MovieCard = (movieData) => {

  const navigate = useNavigate();

  const {poster_path, title, overview} = movieData;

  return (
    <div className="card-container row d-flex flex-wrap">
      <div className="col">
        <div 
        className="card " 
        style={{ width: "16rem" , cursor:"pointer", border:"solid 2px", padding:"2px"}}
        onClick={() => navigate('movieDetail', {state: movieData})}>
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="image" />
        </div>
        <div className="bg-primary" style={{ width: "16rem" }}>
          <h3 className="card-title text-center text-light ">{title}</h3>
          <p className="overview card-text text-hover">{overview}</p>
        </div>
      </div>
      
    </div>
  ) 
};

export default MovieCard;
