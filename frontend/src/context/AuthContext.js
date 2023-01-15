import axios from '../api/axios';
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();



export const AuthContexProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    console.log(res)
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    // await axios.post("/auth/logout");
    setCurrentUser(null);
    navigate("/")
  };

  const deleteUser = async (userId) =>{
    console.log(userId)

   
    try {
       
        const res = await axios.delete(`/auth/${userId}`);
 
        navigate("/")
        console.log(res)
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