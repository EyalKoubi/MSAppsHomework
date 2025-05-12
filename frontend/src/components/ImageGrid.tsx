import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import {
  fetchImages,
  setCategory,
  setPage,
} from "../features/images/imagesSlice";
import CategoryModal from "./CategoryModal";
import type { Photo } from "../types/Photo";
import ImageModal from "./ImageModal";
import "../App.css";

const ImageGrid = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { photos, status, category, page } = useSelector(
    (state: RootState) => state.images
  );

  const [isModalOpen, setModalOpen] = useState(false);
  const perPage = useMemo(() => {
    return window.innerWidth >= 768 ? 18 : 9;
  }, []);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    dispatch(fetchImages({ category, page, perPage }));
  }, [dispatch, category, page]);


  const handleCategorySelect = (newCategory: string) => {
    dispatch(setCategory(newCategory));
    dispatch(
      fetchImages({
        category: newCategory,
        page: 1,
        perPage: 18,
      })
    );
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.topBar}>
        <button
          style={{
            ...styles.navButton,
            ...(page === 1 ? styles.disabledButton : {}),
          }}
          onClick={() => dispatch(setPage(page - 1))}
          disabled={page === 1}
        >
          ← Prev
        </button>

        <button
          style={{
            ...styles.navButton,
            ...(photos.length < 9 ? styles.disabledButton : {}),
          }}
          onClick={() => dispatch(setPage(page + 1))}
          disabled={photos.length < 9}
        >
          Next →
        </button>
      </div>

      <div style={styles.middleBar}>
        <h1 style={styles.title}>{category.toUpperCase()}</h1>
        <button style={styles.chooseBtn} onClick={() => setModalOpen(true)}>
          Choose Category
        </button>
      </div>

      {status === "loading" && (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
      {status === "failed" && (
        <p style={{ textAlign: "center" }}>Error loading images</p>
      )}

      <div className="image-grid">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.previewURL}
            alt=""
            style={styles.image}
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSelectCategory={handleCategorySelect}
      />
      <ImageModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
};

const isMobile = window.matchMedia("(pointer: coarse)").matches;
const styles = {
  wrapper: {
    backgroundColor: "#f0f4f8",
    minHeight: "100vh",
    padding: "1rem",
    fontFamily: "sans-serif",
  },
  disabledButton: {
    backgroundColor: "#cccccc",
    color: "#666666",
    cursor: "not-allowed",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  middleBar: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    gap: "0.5rem",
    marginBottom: "1.5rem",
  },
  navButton: {
    padding: "0.6rem 1rem",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    minWidth: "80px",
    justifySelf: "center" as const,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    gap: "0.5rem",
  },
  title: {
    fontSize: "2rem",
    margin: 0,
    color: "#333",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
    wordBreak: "break-word" as const,
  },
  chooseBtn: {
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
    gap: "1rem",
    maxWidth: "800px",
    margin: "0 auto",
  },
  image: {
    width: "100%",
    height: "185px",
    objectFit: "cover" as const,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  } as React.CSSProperties,
};

export default ImageGrid;
