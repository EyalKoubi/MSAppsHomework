

# 📸 Fullstack Pixabay Gallery (React + Node.js)

This project is a fullstack image gallery using the Pixabay API.  
It includes dynamic category filtering, pagination, modal previews, and clean architecture across React + Redux frontend and Node.js backend.

---

## 🚀 Features

- Fetches images from [Pixabay API](https://pixabay.com/api/)
- Dynamic category selection via modal
- Pagination using "Prev" and "Next" buttons (exactly 9 images per page)
- Responsive design:
  - Desktop: grid of 3x3
  - Mobile: single-column layout
- Image modal displays:
  - Views
  - Downloads
  - Collections
- Backend supports:
  - Sorting by `id` or `date`
  - Pagination via `page` and `perPage` query params
- Clean code with comments and error handling

---

## 🛠 Technologies Used

### Frontend (`frontend/`)
- React (Vite)
- TypeScript
- Redux Toolkit
- Axios
- CSS

### Backend (`backend/`)
- Node.js
- Express.js
- TypeScript
- Axios

---

## 🔧 How to Run Locally

### 1. Clone the project
```bash
git clone https://github.com/EyalKoubi/MSAppsHomework.git


Start the Backend:
cd backend
npm install
npm run start

Start the Frontend:
cd ../frontend
npm install
npm run dev
