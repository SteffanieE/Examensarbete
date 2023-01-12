import express from "express";
import { register, login, logout, deleteUser } from "../controllers/auth.js";


const router = express.Router()

router.post("/register", register )
router.post("/login", login )
router.post("/logout", logout)
router.delete("/:id", deleteUser)

export default router;