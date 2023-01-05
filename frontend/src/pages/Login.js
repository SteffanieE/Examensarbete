import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    });

    const [error, setError] = useState(null);

    const navigate = useNavigate();

  
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:8000/api/auth/login", inputs)
        navigate("/");
     
      } catch (err) {
        setError(err.response.data);
      }
    };


  return (
      <div>
          <h1>Login</h1>
          <input required type="text" placeholder='Email...' name="email" onChange={handleChange} />
          <input type="password" placeholder='Password...' name="password" onChange={handleChange} />
          <button onClick={handleSubmit}>Login</button>
          {error && <p> {error}</p>}
      </div>
  )
}

export default Login