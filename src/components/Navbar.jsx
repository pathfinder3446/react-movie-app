const Navbar = () => {
  return ( 
      <div className="navbar">
          <div className="navLeft">
              <h4>React Movie App</h4>
          </div>
          <div className="navRight">
              <button className="btn" >Login</button>
              <button className="btn" >Register</button>
          </div>
      </div>
   );
}

export default Navbar;