import { borderRadius, display, padding } from "@mui/system";
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const SearchCard = (movieData) => {

  const navigate = useNavigate();

  const {poster_path, title, overview} = movieData;

  return (
    <div className="card-container row d-flex flex-wrap">
      <div className="col">
        <div 
        className="card " 
        style={{ width: "16rem" , cursor:"pointer", border:"solid 2px", padding:"2px"}}
        onClick={() => navigate('movieDetail', {state: movieData})}
        >
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="image" />
        </div>
        <div className="bg-primary" style={{ width: "16rem" }}>
          <h3 className="card-title text-center text-light d-flex align-items-center justify-content-center "style={{height:"4rem", fontSize:"20px"}}>{title}</h3>
          <p className="overview card-text text-hover" style={{ display:"none"}}>{overview}</p>
        </div>
      </div>
      
    </div>
  ) 
};

export default SearchCard;
