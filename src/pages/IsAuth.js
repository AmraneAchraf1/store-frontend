import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const IsAuth = ({ children }) => {

  const isAuthenticated = localStorage.getItem("accessToken");

  const navigate = useNavigate();

  if (isAuthenticated === undefined || isAuthenticated === null) {
    
    return (

      <button className="btn btn-dark" onClick={() => navigate("/admin/auth", { replace: true })}>
        Pleas Login
      </button>
      
    );
  }



  return <>{children}</>;
};

export default IsAuth;
