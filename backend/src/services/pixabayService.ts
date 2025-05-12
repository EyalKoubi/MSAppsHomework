import axios from "axios";
import { Photo } from "../types/Photo";

const API_KEY = "25540812-faf2b76d586c1787d2dd02736";

export const fetchPhotos = async (
  category: string,
  sortBy: string
): Promise<Photo[]> => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${category}&per_page=50`;

  const res = await axios.get(url);
  const photos: Photo[] = res.data.hits;

  return photos.sort((a, b) => {
    if (sortBy === "id") return a.id - b.id;
    if (sortBy === "date")
      return (
        new Date(b.userImageURL).getTime() - new Date(a.userImageURL).getTime()
      );
    return 0;
  });
};
