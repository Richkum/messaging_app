import express from "express";
import authMiddleware from "../middleware/authIndex";

const router = express.Router();

router.get("/get-user", authMiddleware);
