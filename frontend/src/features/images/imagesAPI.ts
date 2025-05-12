import axios from "axios";

export const fetchPhotos = async (
  category: string,
  page: number,
  perPage: number = 9
) => {
  const res = await axios.get("https://msappshomework.onrender.com/api/photos", {
    params: { category, page, perPage },
  });
  return res.data;
};
