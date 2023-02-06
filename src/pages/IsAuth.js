import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";


const IsAuth = ({ children }) => {

  const isAuthenticated = localStorage.getItem("accessToken");

  const {admin} = useSelector(state => state.admin)
  
  const navigate = useNavigate();


  useEffect(() => {
    if (isAuthenticated === undefined || isAuthenticated === null || isAuthenticated.length===0 ) {
      
      navigate("/admin/auth", {replace: true})
    
    }
  }, [isAuthenticated, navigate, admin])



  return <>{children}</>;
};

export default IsAuth;
