import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { FinanceProvider } from "./contexts/FinanceContext.jsx";
import { DMProvider } from "./contexts/DMContext";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FinanceProvider>
        <DMProvider>
          <App />
          <Toaster />
        </DMProvider>
      </FinanceProvider>
    </AuthProvider>
  </StrictMode>
);
