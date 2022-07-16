import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login"
import MovieDetail from "../pages/MovieDetail"


const Router = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="movieDetail" element={<MovieDetail />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router