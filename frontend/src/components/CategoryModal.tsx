import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
}

const categories = [
  "dogs",
  "cats",
  "nature",
  "sports",
  "technology",
  "cars",
  "work",
];

const CategoryModal: React.FC<Props> = ({
  isOpen,
  onClose,
  onSelectCategory,
}) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Choose Category</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                style={styles.button}
                onClick={() => {
                  onSelectCategory(cat);
                  onClose();
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={onClose} style={styles.closeButton}>
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
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "white",
    padding: "2rem",
    borderRadius: "16px",
    width: "320px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center" as const,
  },
  button: {
    padding: "0.75rem",
    margin: "0.5rem 0",
    width: "100%",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    backgroundColor: "#f2f2f2",
    cursor: "pointer",
    transition: "all 0.2s ease",
  } as React.CSSProperties,
  buttonHover: {
    backgroundColor: "#e0e0e0",
  },
  closeButton: {
    marginTop: "1rem",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    padding: "0.5rem 1.2rem",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default CategoryModal;
