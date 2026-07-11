import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { translations } from "./data/translations";
import "./App.css";

const API_URL =
  "https://spoken-itself-periods-new.trycloudflare.com";
const RESTAURANT_ID = 1;

type RestaurantSettings = {
  id: number;
  restaurantId: number;

  heroImageUrl: string | null;
  logoUrl: string | null;
  campaignImageUrl: string | null;

  newsImageOneUrl: string | null;
  newsImageTwoUrl: string | null;
  newsImageThreeUrl: string | null;

  aboutImageOneUrl: string | null;
  aboutImageTwoUrl: string | null;
  aboutImageThreeUrl: string | null;

  foodImageOneUrl: string | null;
  foodImageTwoUrl: string | null;
  foodImageThreeUrl: string | null;

  restaurantImageOneUrl: string | null;
  restaurantImageTwoUrl: string | null;
  restaurantImageThreeUrl: string | null;
  restaurantImageFourUrl: string | null;

  heroEyebrow: string | null;
  heroTitle: string | null;
  heroText: string | null;
  heroPrimaryButtonText: string | null;
  heroSecondaryButtonText: string | null;

  aboutEyebrow: string | null;
  aboutTitle: string | null;
  aboutText: string | null;

  lunchImageOneUrl: string | null;
  lunchImageTwoUrl: string | null;
  lunchImageThreeUrl: string | null;

  lunchEyebrow: string | null;
  lunchTitle: string | null;
  lunchText: string | null;

  campaignEyebrow: string | null;
  campaignTitle: string | null;
  campaignText: string | null;
  campaignButtonText: string | null;

  newsEyebrow: string | null;
  newsTitle: string | null;
  newsText: string | null;

  newsSectionTitle: string | null;
  newsOneTitle: string | null;
  newsOneText: string | null;
  newsTwoTitle: string | null;
  newsTwoText: string | null;
  newsThreeTitle: string | null;
  newsThreeText: string | null;

  foodSectionEyebrow: string | null;
  foodSectionTitle: string | null;
  foodSectionText: string | null;

  foodOneTitle: string | null;
  foodOneText: string | null;
  foodTwoTitle: string | null;
  foodTwoText: string | null;
  foodThreeTitle: string | null;
  foodThreeText: string | null;

  restaurantGalleryEyebrow: string | null;
  restaurantGalleryTitle: string | null;
  restaurantGalleryText: string | null;

  cateringEyebrow: string | null;
  cateringTitle: string | null;
  cateringTextOne: string | null;
  cateringTextTwo: string | null;
  cateringContactButtonText: string | null;

  contactEyebrow: string | null;
  contactTitle: string | null;

  addressText: string | null;
  phoneText: string | null;
  instagramText: string | null;
  emailText: string | null;
  whatsappText: string | null;

  winterHoursTitle: string | null;
  winterHoursText: string | null;

  summerHoursTitle: string | null;
  summerHoursText: string | null;

  mapsButtonText: string | null;

  footerText: string | null;
};

function App() {
  const [language, setLanguage] = useState<"sv" | "en">("sv");
  const [settings, setSettings] = useState<RestaurantSettings | null>(null);

  const t = translations[language];

  useEffect(() => {
    async function loadSettings() {
      try {
        const response = await fetch(
          `${API_URL}/api/restaurants/${RESTAURANT_ID}/settings`
        );

        if (!response.ok) {
          throw new Error("Kunde inte hämta settings.");
        }

        const data: RestaurantSettings = await response.json();
        setSettings(data);
      } catch (error) {
        console.error("Kunde inte hämta settings:", error);
      }
    }

    loadSettings();
  }, []);

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
              settings={settings}
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