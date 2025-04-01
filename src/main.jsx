import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CursorProvider } from "./assets/context/cursorContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </StrictMode>
);
