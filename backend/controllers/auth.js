import { db } from "../db.js"
import bcrypt from "bcryptjs";


export const register = (req, res) => {

   // Check if user already exist in the database.
   const query = "SELECT * FROM users WHERE email = ?" 

   db.query (query, [req.body.email], (err,data) =>{
      if(err) return res.json(err)
      if(data.length) return res.status(409).json("Finns redan en användare med denna Email!");

      //Hash the password
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      //Create a new user
      const query = "INSERT INTO users(`email`,`password`) VALUES (?)";
      const values = [req.body.email, hash];
  
      db.query(query, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Hittar ingen registerad användare");
      });
    });
}

export const login = (req, res) => {
  
  //Check if user email exist in the database 
  const q = "SELECT * FROM users WHERE email = ?";

  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Hittar ingen användare!");
   
    //Check password hash
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );

    if (!isPasswordCorrect)
      return res.status(400).json("Felaktigt användarnamn eller lösenord!");

    const { password, ...other } = data[0];

    res
      .status(200)
      .json(other);
  }); 
};

//Remove users from database with matching id
export const deleteUser = (req, res) => {

  const userId = req.params.id;
  const q = "DELETE FROM users WHERE `id` = ?";

  db.query(q, [userId], (err, data) => {
    if (err) return res.status(403).json("Användare ej borttagen");

    return res.json("Användare borttagen!");
  });
  
};