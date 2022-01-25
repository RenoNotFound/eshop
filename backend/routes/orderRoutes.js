import express from "express";
import { addOrderItems } from "../controllers/productController.js";

const router = express.Router();

router.post("/", protect, addOrderItems);

export default router;
