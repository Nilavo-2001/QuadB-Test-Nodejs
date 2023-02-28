import express from 'express';
const router = express.Router();
import serveData from '../controllers/serveData.js';
router.get("/get-data", serveData)

export default router;