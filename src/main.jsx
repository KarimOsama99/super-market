import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from './App.jsx';
import './assets/css/main.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
