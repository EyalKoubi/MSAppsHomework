import express, { Request, Response } from "express";
import { fetchPhotos } from "../services/pixabayService";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const category = req.query.category as string;
  const sort = (req.query.sort as string) || "id";
  const page = parseInt(req.query.page as string) || 1;
  const perPage = 9;

  if (!category) {
    res.status(400).json({ error: "Category is required" });
    return;
  }

  try {
    const photos = await fetchPhotos(category, sort);
    const startIndex = (page - 1) * perPage;
    const paginated = photos.slice(startIndex, startIndex + perPage);

    res.json({ photos: paginated, total: photos.length });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
});

export default router;
