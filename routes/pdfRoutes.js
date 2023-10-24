import express from "express";
import { allData, pdfController } from "../controller/pdfController.js";
const router = express.Router();

router.post("/upload", pdfController);
router.get("/fetch", allData);
export default router;