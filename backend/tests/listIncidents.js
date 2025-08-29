import request from "supertest";
import app from "../server.js";

test("GET /api/incidents returns 200", async () => {
  const res = await request(app).get("/api/incidents");
  expect(res.statusCode).toBe(200);
});
