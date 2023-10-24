import express from "express";
import { logoutUser } from "../controller/logoutController.js";
const router = express.Router();
router.post("/logout/:id", logoutUser);
export default router;