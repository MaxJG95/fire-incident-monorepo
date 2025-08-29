import Database from "better-sqlite3";

// Intialize DB if not exists
const db = new Database("incidents.sqlite");

// Create table if not exists
db.exec(`
  CREATE TABLE IF NOT EXISTS incidents (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    incident_type TEXT NOT NULL,
    location TEXT,
    image TEXT,
    createdAt TEXT NOT NULL
  )
`);

export default db;