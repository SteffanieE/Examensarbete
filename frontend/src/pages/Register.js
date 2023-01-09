import React, { useState } from 'react';
import axios from '../api/axios';

const REGISTER_URL ='/auth/register'; 

const Register = () => {

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
            const res = await axios.post(REGISTER_URL, inputs)
            console.log(res)
        }
        catch(err){
            setError(err.response.data)
        }
    }
    
    return (
        <div>
            <div>
                <h1>Registera</h1>
                <form>
                    <label>Email</label>
                    <input 
                    type="text"
                    name='email' 
                    onChange={handelChange} />
                    <label>Lösenord</label>
                    <input 
                    type="text"
                    name='password'  
                    onChange={handelChange} 
                    />
                    <button onClick={handelSubmit}>Registera</button>
                    {error && <p> {error}</p>}
                </form>
            </div>
        </div>
    )
}

export default Register