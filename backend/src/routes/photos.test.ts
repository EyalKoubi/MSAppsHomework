import request from "supertest";
import express from "express";
import photoRoutes from "./photos";

const app = express();
app.use("/api/photos", photoRoutes);

describe("GET /api/photos", () => {
  it("should return 400 if category is missing", async () => {
    const res = await request(app).get("/api/photos");
    expect(res.status).toBe(400);
  });

  it("should return 200 and photos if category is given", async () => {
    const res = await request(app).get("/api/photos?category=dogs&page=1");
    expect(res.status).toBe(200);
    expect(res.body.photos).toBeDefined();
  });
});
