// create routes
// create pages
// get API data with axios, useEffect
// use state to hold data
// console.log(APIdata)
// send props to pages / global states (map, filter, id, ternary, short circuit)
// create navbar and show at all pages
// firebase


import { useState, useEffect } from "react";
import axios from 'axios';

const Main = () => {

  const [movieData, setMovieData] = useState([]);

  const urlData = `https://api.themoviedb.org/3/discover/movie?api_key=e0f6ffb03a4f78f1783ac00f73df6b95`;

  const getMovieData = async () => {
    try {
      const response = await axios.get(urlData);
       setMovieData(response.data.results);
       console.log(movieData)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovieData()
  }, [])


  return (
  <div className="main" >
    <button type="submit" onClick={() => getMovieData()} >Submit</button>
  </div>
  )
};

export default Main;
