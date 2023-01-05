import './App.css';
//import axios from "axios";
//import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  /* const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const register = () => {


    axios.post('http://localhost:3001/register', {
      username: username,
      password: password,
      }).then((response) => {
        console.log(response);
      });
  };
   */

  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/Login' element={<Login />}/>
          <Route path="/Register" element={<Register />}/>
        </Routes>


      </BrowserRouter>


        {/* <div>
          <h1>Registration</h1>
          <label>Username</label>
          <input 
            type="text" 
            onChange={(e)=> {
              setUsername(e.target.value);
            }} />
          <label>Password</label>
          <input type="text" 
            onChange={(e)=> {
              setPassword(e.target.value);
            }} />
          <button onClick={register}>Register</button>
        </div>
        <div>
          <h1>Login</h1>
          <input type="text" placeholder='Username...' />
          <input type="password" placeholder='Password...' />
          <button>Login</button>
        </div> */}
      
    </div>
  );
}

export default App;
