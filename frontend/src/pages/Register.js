import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
import './Register.css';



const Register = () => {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    })

    const [error, setError] = useState(null)

    const handelChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handelSubmit = async e =>{
        e.preventDefault()
        try{
            const res = await axios.post('/auth/register', inputs)
            navigate("/loggain");
            console.log(res)
        }
        catch(err){
            setError(err.response.data)
        }
    }
    
    return (
        <main className="register-page bg-accent">
            <section className="register-container bg-white">
                <h1>Skapa nytt konto</h1>
                <form onSubmit={handelSubmit}>
                    <label>Email</label>
                    <input type="text" name='email' onChange={handelChange} required />
                    <label>Lösenord</label>
                    <input type="text" name='password' onChange={handelChange} required />
                    <button className="large-button-primary" type="submit">Registera</button>
                    <p className="fs-200">Genom att registera mig godkänner jag</p>
                    <p className="fs-200"> Återbruket.se användarvillkor</p>
                    {error && <p className='error-message'> {error}</p>}
                </form>
            </section>
        </main>
    )
}

export default Register;