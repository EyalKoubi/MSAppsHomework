import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos } from "./imagesAPI";
import type { Photo } from "../../types/Photo";

interface ImagesState {
  photos: Photo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  category: string;
  page: number;
  total: number;
}

const initialState: ImagesState = {
  photos: [],
  status: "idle",
  error: null,
  category: "dogs",
  page: 1,
  total: 0,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async ({
    category,
    page,
    perPage,
  }: {
    category: string;
    page: number;
    perPage: number;
  }) => {
    const data = await fetchPhotos(category, page, perPage);
    return data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setCategory(state, action) {
      state.category = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.photos = action.payload.photos;
        state.total = action.payload.total;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch images";
      });
  },
});

export const { setCategory, setPage } = imagesSlice.actions;
export default imagesSlice.reducer;
