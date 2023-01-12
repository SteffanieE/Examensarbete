import express from "express";
import {

  getAds,
  getAd,
  postAd,
  deleteAd,
 

  
 // updatePost
} from "../controllers/ad.js";

const router = express.Router();


router.get("/", getAds);
router.get("/:id", getAd);
router.post("/", postAd);
router.delete("/:id", deleteAd);
//router.put("/:id", updatePost); 

export default router;