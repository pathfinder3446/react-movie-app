// create routes
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// create navbar and show at all pages
// firebase

import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchCard from "../components/SearchCard";

const Main = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchData, setSearchData] = useState('');

  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=e0f6ffb03a4f78f1783ac00f73df6b95`;

  const urlSearch = `https://api.themoviedb.org/3/search/movie?api_key=e0f6ffb03a4f78f1783ac00f73df6b95&query=${searchData.title}`;

  const getMovieData = async () => {
    try {
      const response = await axios.get(urlData);
      setMovieData(response.data.results);
      console.log(movieData);
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchData = async () => {
    try {
      const response = await axios.get(urlSearch);
      setSearchData(response.data.results);
      console.log(searchData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = ()=> {
    getSearchData();
  }

  useEffect(() => {
    getMovieData();
  }, []);

  // useEffect(() => {
  //   getSearchData();
  // }, []);


  if(searchData){
    return (
      <div className="main">
        <nav className="navbar navbar-light bg-light justify-content-center">
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search a movie..."
              aria-label="Search"
              onChange={handleChange}
              // value= "search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              style={{ marginLeft: "1rem" }}
              type="submit"
              onClick={() => getSearchData()}
            >
              Search
            </button>
          </form>
        </nav>
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {searchData.map((movie, index) => {
            return <SearchCard {...movie} key={index} />;
          })}
        </div>

      </div>
    )
  } else {
    return (
      <div className="main">
        <nav className="navbar navbar-light bg-light justify-content-center">
          <form className="form-inline d-flex">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search a movie..."
              aria-label="Search"
              onChange={handleChange}
              // value= "search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              style={{ marginLeft: "1rem" }}
              type="submit"
              onClick={() => getMovieData()}
            >
              Search
            </button>
          </form>
        </nav>
        
        <div className="d-flex flex-wrap gap-2 justify-content-center">
          {movieData?.map((movie, index) => {
            return <MovieCard {...movie} key={index} />;
          })}
        </div>
       
      </div>
    );
  }

  
};

export default Main;
