import express from "express";
import {
  getAds,
  getAd,
  postAd,
  deleteAd, 
  updateAd,
  getAdsCategory
} from "../controllers/ad.js";

const router = express.Router();

router.get("/", getAds);
router.get("/category", getAdsCategory);
router.get("/:id", getAd);
router.post("/", postAd);
router.delete("/:id", deleteAd);
router.put("/:id", updateAd); 

export default router;