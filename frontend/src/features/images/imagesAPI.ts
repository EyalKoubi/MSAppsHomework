import axios from "axios";

export const fetchPhotos = async (
  category: string,
  page: number,
  perPage: number = 9
) => {
  const res = await axios.get("http://localhost:3001/api/photos", {
    params: { category, page, perPage },
  });
  return res.data;
};
