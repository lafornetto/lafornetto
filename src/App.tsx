import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { translations } from "./data/translations";
import "./App.css";

function App() {
  const [language, setLanguage] = useState<"sv" | "en">("sv");
  const t = translations[language];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          }
        />

        <Route
          path="/meny"
          element={
            <MenuPage
              language={language}
              setLanguage={setLanguage}
              t={t}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;