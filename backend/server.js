import express from "express";
import cors from "cors";
import incidentRoutes from "./routes/incidentRoutes.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Rutas
app.get("/api", (req, res) => {
    res.status(200).send("API Live");
});

app.use("/api/incidents", incidentRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Backend running http://localhost:${PORT}`);
});
