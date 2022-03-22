import React from 'react';
import"../Styles/Login.css"
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    function Restaurant(){navigate("/Restaurant");

    }
    function Coustomer(){
        navigate("/User");
    }
  return <div className='Login'>
      <div className="restaurant"><div className="restbody"></div>
    <button className="restlogin" onClick={Restaurant}>Restlog</button></div>
      <div className="coustomer">
          <div className="coustbody"></div>
          <button className="coustlogin" onClick={Coustomer}>COuster</button>
      </div>
  </div>;
}

export default Login;
