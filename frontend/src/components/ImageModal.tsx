import React from "react";
import type { Photo } from "../types/Photo";

interface Props {
  photo: Photo | null;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <img src={photo.webformatURL} alt="" style={styles.image} />
        <h2>Photo Details</h2>
        <p>
          <strong>Views:</strong> {photo.views}
        </p>
        <p>
          <strong>Downloads:</strong> {photo.downloads}
        </p>
        <p>
          <strong>Collections:</strong> {photo.collections}
        </p>
        <button onClick={onClose} style={styles.closeBtn}>
          Close
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  modal: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    width: "300px",
    textAlign: "center" as const,
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  },
  image: {
    width: "100%",
    maxHeight: "300px",
    borderRadius: "8px",
    marginBottom: "1rem",
  },
  closeBtn: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default ImageModal;
