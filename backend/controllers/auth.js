import { db } from "../db.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

   // Check if user already exist in the database.
   const query = "SELECT * FROM users WHERE email = ?" 

   db.query (query, [req.body.email], (err,data) =>{
      if(err) return res.json(err)
      if(data.length) return res.status(409).json("User already exists!");

      //Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      //create a new user
      const query = "INSERT INTO users(`email`,`password`) VALUES (?)";
      const values = [req.body.email, hash];
  
      db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("A new user is now registered");
      });
    });
}

export const login = (req, res) => {
    
    //Check if user email is in the databas
    const query = "SELECT * FROM users WHERE email = ?";

    db.query(query, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Check if the password is correct.
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
        
      //If the password is not correct, a message is sent to the frontend.
      if (!isPasswordCorrect)
        return res.status(400).json("You have entered the wrong password!");
  

      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    });

    
}

export const logout = (req, res) => {

    
}