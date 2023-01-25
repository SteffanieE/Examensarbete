import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import './Login.css';


const Login = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [error, setError] = useState(null);
    const [inputs, setInputs] = useState({
      email: "",
      password: "",
    }); 

    //Saves name and password in inputs with useState
    const handleChange = (e) => {
      setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    //sends username and password to the backend
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
      <main className=" login-page">
        <div className="login-container">
          <section className="signup-part">
            <h1 className="fs-500">Skapa konto</h1>
            <Link className="text-dark">Skapa konto med Google</Link>
            <p>eller</p>
            <Link className="text-white bg-dark" to="/skapa-konto">Skapa konto utan google</Link>
            <p className="fs-200">Genom att registera mig godkänner jag 
            Återbruket.se användarvillkor</p>
          </section>

          <section className="login-part">
            <h1 className="fs-500">Logga in</h1>
            <Link>Google</Link>
            <p>eller</p>
            <input type="text" placeholder='Email...' name="email" value={inputs.email} onChange={handleChange} />
            <input type="password" placeholder='Lösenord...' name="password" value={inputs.password} onChange={handleChange} />
            <button className="large-button-primary" onClick={handleSubmit}>Logga in</button>
            {error && <p> {error}</p>}
          </section>
        </div>
      </main>
  )
}

export default Login