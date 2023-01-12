import { db } from "../db.js";


/* export const getAds = (req, res) => {
  const query = 
    "SELECT * FROM ads";

  db.query(query, (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
}; */

export const getAds = (req, res) => {

  const query = req.query.id
  ? "SELECT * FROM ads WHERE user_id = ?"
  : "SELECT * FROM ads";
 
 
  db.query(query, [req.query.id], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

export const getAd = (req, res) => {
  const query =
    "SELECT * FROM ads WHERE id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};



export const postAd = (req, res) => {
/*   const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!"); */
    
    const q =
      "INSERT INTO ads(`title`, `description`, `date`, `category`, `img_url`, `street`, `zipcode`, `city`, `user_id` ) VALUES (?)";

    const values = [
      req.body.title,
      req.body.description,
      req.body.date,
      req.body.category,
      req.body.img_url,
      req.body.street,
      req.body.zipcode,
      req.body.city,
      req.body.user_id
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  
};



export const deleteAd = (req, res) => {
/*   const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!"); */

    const postId = req.params.id;
    const q = "DELETE FROM ads WHERE `id` = ?";

    db.query(q, [postId], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  
};



export const updateAd = (req, res) => {
/*   const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!"); */

    const adId = req.params.id;
    const q =
      "UPDATE ads SET `title`=?,`description`=?,`street`=?,`zipcode`=?,`city`=? WHERE `id` = ?";
    
      
      const values = [
        req.body.title,
        req.body.description,
        req.body.street,
        req.body.zipcode,
        req.body.city,
      ];

    db.query(q, [...values, adId], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("The ad has been updated!");
    });
  
}; 