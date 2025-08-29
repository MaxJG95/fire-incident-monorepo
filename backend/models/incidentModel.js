import db from "../db/index.js";

export const getAllIncidents = () => {
  return db.prepare("SELECT * FROM incidents ORDER BY createdAt DESC").all();
};

export const createIncident = (incident) => {
  const query = db.prepare(`
    INSERT INTO incidents (title, description, incident_type, location, image, createdAt)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const result = query.run(
    incident.title,
    incident.description,
    incident.incident_type,
    incident.location,
    incident.image,
    incident.createdAt
  );

  return { ...incident, id: result.lastInsertRowid };
};