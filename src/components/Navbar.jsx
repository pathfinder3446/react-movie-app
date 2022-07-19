import {useNavigate} from "react-router-dom";
const Navbar = () => {

  const navigate = useNavigate();


  return ( 
      <div className="navbar text-white bg-dark">
          <div 
          className="navLeft"
          style={{ cursor: "pointer" }}
          >
              <h4 onClick={() => navigate('/')} >React Movie App</h4>
          </div>
          <div className="navRight ">
              <button className="btn rounded bg-primary text-white" onClick={() => navigate('login')} >Login</button>
              <button className="btn border solid rounded bg-light text-dark" style={{ marginLeft: "1rem" }} onClick={() => navigate('register')}  >Register</button>
          </div>
      </div>
   );
}

export default Navbar;