import express from "express";
import {

    getAds,
    getAd,
    postAd,
 
 /*  
  deletePost,
  addPost,

  
  updatePost, */
} from "../controllers/ad.js";

const router = express.Router();

router.get("/", getAds);
router.get("/:id", getAd);
router.post("/", postAd);
/*
router.delete("/:id", deletePost);
router.put("/:id", updatePost); */

export default router;