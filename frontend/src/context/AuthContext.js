import axios from '../api/axios';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const navigate = useNavigate();

  
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );


  //Saves user name and password in useState and localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);


  //Sends request to the backend to loggin user with matching email and password.
  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  //Sets useState to null  
  const logout = async () => {
    setCurrentUser(null);
    navigate("/")
  };

  //Sends request to the backend to DELETE user with matching id.
  const deleteUser = async (userId) =>{
    try {
      const res = await axios.delete(`/auth/${userId}`);
      navigate("/")
      } catch (err) {
      console.log(err);  
    }  
    setCurrentUser(null);
  }


  return (
    <AuthContext.Provider value={{ currentUser, login, logout, deleteUser }}>
      {children}
    </AuthContext.Provider>
  );
};