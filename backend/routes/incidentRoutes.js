import express from "express";
import multer from "multer";
import path from "path";

import { listIncidents, addIncident } from "../controllers/incidentController.js";

const router = express.Router();
//const upload = multer({ dest: "uploads" });

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
    fileFilter: (req, file, cb) => {
        const allowed = ["image/jpeg", "image/png"];
        if (allowed.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Invalid file type"));
        }
    }
});


const authMiddleware = (req, res, next) => { //middleware for uth, mocking protected route
    const token = req.headers["authorization"];
    if (token === "Bearer mysecrettoken123") {
        return next();
    }
    return res.status(403).json({ error: "Forbidden" });
}

router.get("/", authMiddleware, listIncidents);
router.post("/", upload.single("image"), addIncident);

export default router;
