import { db } from "../db.js";

// If request includes user Id GET ads from the database on that user otherwise GET ALL ads.
export const getAds = (req, res) => {

  const query = req.query.id
  ? "SELECT * FROM ads WHERE user_id = ?"
  : "SELECT * FROM ads";
  
  db.query(query, [req.query.id], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};

// GET single ad with ID
export const getAd = (req, res) => {
  
  const query =
    "SELECT * FROM ads WHERE id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};

// Save ad in database
export const postAd = (req, res) => {
    
  const q =
    "INSERT INTO ads(`title`, `description`, `date`, `category`, `slug`, `img_url`, `street`, `zipcode`, `city`, `user_id` ) VALUES (?)";

  const values = [
    req.body.title,
    req.body.description,
    req.body.date,
    req.body.category,
    req.body.slug,
    req.body.img_url,
    req.body.street,
    req.body.zipcode,
    req.body.city,
    req.body.user_id
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Annons upplagd!");
  });

};


//DELETE ad from database with ID
export const deleteAd = (req, res) => {

  const postId = req.params.id;
  const q = "DELETE FROM ads WHERE `id` = ?";

  db.query(q, [postId], (err, data) => {
    if (err) return res.status(403).json("Du kan enbart ta bort dina egna annonser!");

    return res.json("Annonsen har tagits bort!");
  });
  
};

//UPPDATE ad I database with ID
export const updateAd = (req, res) => {

  const adId = req.params.id;
  const q =
    "UPDATE ads SET `title`=?,`description`=?,`category`=?,`slug`=?,`img_url`=?,`street`=?,`zipcode`=?,`city`=? WHERE `id` = ?";
    
    const values = [
      req.body.title,
      req.body.description,
      req.body.category,
      req.body.slug,
      req.body.img_url,
      req.body.street,
      req.body.zipcode,
      req.body.city,
    ];

  db.query(q, [...values, adId], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Annonsen uppdaterad!");
  });
}; 



// GET alla ads by category slug  
export const getAdsCategory = (req, res) => {

  const query = req.query.slug
  ? "SELECT * FROM ads WHERE slug = ?"
  : "SELECT * FROM ads";
  
  db.query(query, [req.query.slug], (err, data) => {
    if (err) return res.status(500).send(err);

    return res.status(200).json(data);
  });
};