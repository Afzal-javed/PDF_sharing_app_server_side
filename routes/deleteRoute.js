import express from 'express';
import { deletePdf } from '../controller/deletePdfController.js';
const router = express.Router();
router.delete("/delete/:id", deletePdf)
export default router;