import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";


const Login = () => {

    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    }); 

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await login(inputs)
        setInputs({  email: "", password: "", })
        navigate("/");
     
      } catch (err) {
        setError(err.response.data);
      }  
    };

  return (
      <div>
          <h1>Logga in</h1>
          <input required type="text" placeholder='Email...' name="email" value={inputs.email} onChange={handleChange} />
          <input type="password" placeholder='Lösenord...' name="password" value={inputs.password} onChange={handleChange} />
          <button onClick={handleSubmit}>Logga in</button>

          <li> <Link to="/registera">Register</Link></li>
          {error && <p> {error}</p>}
      </div>
  )
}

export default Login