import fs from "fs";
import { getAllIncidents, createIncident } from "../models/incidentModel.js";
const DATA_FILE = "./incidents.json";

//let incidents = [];
// if (fs.existsSync(DATA_FILE)) {
//     incidents = JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
// }

// const saveIncidents = () => {
//     fs.writeFileSync(DATA_FILE, JSON.stringify(incidents, null, 2));
// };

export const listIncidents = (req, res) => {
    const rows = getAllIncidents();
    res.json(rows);
    //res.json(incidents.sort((a, b) => b.createdAt - a.createdAt));
};

export const addIncident = (req, res) => {
    const { title, description, incident_type, location } = req.body;

    if (!title || !incident_type) {
        return res.status(400).json({ error: "title and incident_type are required" });
    }

    const newIncident = {
        title,
        description: description || "",
        incident_type,
        location: location || "",
        image: req.file ? `/uploads/${req.file.filename}` : null,
        createdAt: new Date().toISOString(),
    };

    // incidents.push(newIncident);
    // saveIncidents();

    const saved = createIncident(newIncident);
    res.status(201).json(saved);
};
