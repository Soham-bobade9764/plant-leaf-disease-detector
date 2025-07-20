# Plant Leaf Disease Detection System 🌿🦠

This project uses a trained deep learning model (CNN) to detect diseases in plant leaves from uploaded images.

## 📁 Project Structure

```
plant-leaf-disease-detector/
├── flask-backend/
│   ├── app.py
│   ├── models/
│   │   └── model.h5
│   ├── uploads/
├── react-frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   └── index.js
├── docs/
│   └── README.docx
├── README.md
```

## 🚀 How to Run

### 1. Backend (Flask)
```bash
cd flask-backend
pip install -r requirements.txt
python app.py
```

### 2. Frontend (React)
```bash
cd react-frontend
npm install
npm start
```

Then open `http://localhost:3000`

## ✅ Features

- Upload leaf image
- Get predicted disease
- Real CNN model integrated
