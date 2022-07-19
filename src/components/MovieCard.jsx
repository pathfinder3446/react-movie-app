
const MovieCard = (movieData) => {

  const {poster_path, title, overview} = movieData;

  return (
    <div className="card-container row d-flex flex-wrap">
      <div className="col">
        <div className="card" style={{ width: "16rem" }}>
        <img src={`https://image.tmdb.org/t/p/w1280${poster_path}`} alt="image" />
        </div>
        <div className="bg-primary">
          <h3 className="card-title text-center text-light ">{title}</h3>
          <p className="overview card-text text-hover">{overview}</p>
        </div>
      </div>
      
    </div>
  ) 
};

export default MovieCard;
