import express from "express"
import { storePdf } from "../controller/generatePdfController.js";
const router = express.Router();

router.post("/generated-pdf", storePdf);

export default router