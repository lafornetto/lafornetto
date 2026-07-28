import type { Dispatch, SetStateAction } from "react";
import type { Translation } from "../data/translations";

import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { LunchSection } from "../components/LunchSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CateringSection } from "../components/CateringSection";
import { GiftCardSection } from "../components/GiftCardSection";
import { NewsSection } from "../components/NewsSection";
import { GoogleReviewsSection } from "../components/GoogleReviewsSection";

import pizzaImage from "../assets/images/pizza-1.jpg";
import kebabImage from "../assets/images/kebab-1.jpg";
import pastaImage from "../assets/images/pasta-1.jpg";

import restaurantImageOne from "../assets/images/resturange-1.jpg";
import saladImage from "../assets/images/sallad-1.jpg";
import restaurantImageTwo from "../assets/images/resturange-2.jpg";
import counterImage from "../assets/images/resturange-3.jpg";

import pizzaThreeImage from "../assets/images/pizza-3.jpg";
import pastaTwoImage from "../assets/images/pasta-2.jpg";
import saladTwoImage from "../assets/images/sallad-2.jpg";

const API_URL = import.meta.env.VITE_API_URL;

type Language = "sv" | "en";

function getImageUrl(
  imageUrl: string | null | undefined,
  fallback: string,
) {
  if (!imageUrl) {
    return fallback;
  }

  if (
    imageUrl.startsWith("http://") ||
    imageUrl.startsWith("https://")
  ) {
    return imageUrl;
  }

  return `${API_URL}${imageUrl}`;
}

function getLocalizedText(
  language: Language,
  adminText: string | null | undefined,
  translatedText: string,
) {
  if (language === "en") {
    return translatedText;
  }

  return adminText?.trim() || translatedText;
}

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

type HomePageProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  settings: RestaurantSettings | null;
  t: Translation;
};

export function HomePage({
  language,
  setLanguage,
  t,
  settings,
}: HomePageProps) {
  return (
    <>
      <Hero
        language={language}
        setLanguage={setLanguage}
        t={t}
        heroImageUrl={settings?.heroImageUrl}
        logoUrl={settings?.logoUrl}
        heroEyebrow={settings?.heroEyebrow}
        heroTitle={settings?.heroTitle}
        heroText={settings?.heroText}
        heroPrimaryButtonText={settings?.heroPrimaryButtonText}
        heroSecondaryButtonText={settings?.heroSecondaryButtonText}
      />

      <NewsSection
        language={language}
        t={t}
        newsImageOneUrl={settings?.newsImageOneUrl}
        newsImageTwoUrl={settings?.newsImageTwoUrl}
        newsImageThreeUrl={settings?.newsImageThreeUrl}
        newsEyebrow={settings?.newsEyebrow}
        newsTitle={settings?.newsTitle}
        newsText={settings?.newsText}
      />

      <AboutSection
        language={language}
        t={t}
        aboutEyebrow={settings?.aboutEyebrow}
        aboutTitle={settings?.aboutTitle}
        aboutText={settings?.aboutText}
      />

      <section className="about-food-gallery">
        <div className="about-food-gallery-grid">
          <img
            src={getImageUrl(
              settings?.aboutImageOneUrl,
              pizzaThreeImage,
            )}
            alt={
              language === "sv"
                ? "Pizza från La Fornetto"
                : "Pizza from La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.aboutImageTwoUrl,
              pastaTwoImage,
            )}
            alt={
              language === "sv"
                ? "Pasta från La Fornetto"
                : "Pasta from La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.aboutImageThreeUrl,
              saladTwoImage,
            )}
            alt={
              language === "sv"
                ? "Sallad från La Fornetto"
                : "Salad from La Fornetto"
            }
          />
        </div>
      </section>

      <LunchSection
        language={language}
        t={t}
        lunchEyebrow={settings?.lunchEyebrow}
        lunchTitle={settings?.lunchTitle}
        lunchText={settings?.lunchText}
        lunchImageOneUrl={getImageUrl(
          settings?.lunchImageOneUrl,
          pizzaImage,
        )}
        lunchImageTwoUrl={getImageUrl(
          settings?.lunchImageTwoUrl,
          kebabImage,
        )}
        lunchImageThreeUrl={getImageUrl(
          settings?.lunchImageThreeUrl,
          pastaImage,
        )}
      />

      <section className="food-gallery">
        <div className="section-heading">
          <p className="eyebrow">
            {getLocalizedText(
              language,
              settings?.foodSectionEyebrow,
              t.foodSectionEyebrow,
            )}
          </p>

          <h2>
            {getLocalizedText(
              language,
              settings?.foodSectionTitle,
              t.foodSectionTitle,
            )}
          </h2>

          <p>
            {getLocalizedText(
              language,
              settings?.foodSectionText,
              t.foodSectionText,
            )}
          </p>
        </div>

        <div className="food-gallery-grid">
          <img
            src={getImageUrl(
              settings?.foodImageOneUrl,
              pizzaImage,
            )}
            alt={
              language === "sv"
                ? "Pizza från La Fornetto"
                : "Pizza from La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.foodImageTwoUrl,
              kebabImage,
            )}
            alt={
              language === "sv"
                ? "Kebab från La Fornetto"
                : "Kebab from La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.foodImageThreeUrl,
              pastaImage,
            )}
            alt={
              language === "sv"
                ? "Mat från La Fornetto"
                : "Food from La Fornetto"
            }
          />
        </div>
      </section>

      <CateringSection
        language={language}
        t={t}
        cateringEyebrow={settings?.cateringEyebrow}
        cateringTitle={settings?.cateringTitle}
        cateringTextOne={settings?.cateringTextOne}
        cateringTextTwo={settings?.cateringTextTwo}
        cateringContactButtonText={
          settings?.cateringContactButtonText
        }
      />

      <section className="restaurant-gallery">
        <div className="section-heading">
          <p className="eyebrow">
            {getLocalizedText(
              language,
              settings?.restaurantGalleryEyebrow,
              t.restaurantGalleryEyebrow,
            )}
          </p>

          <h2>
            {getLocalizedText(
              language,
              settings?.restaurantGalleryTitle,
              t.restaurantGalleryTitle,
            )}
          </h2>

          <p>
            {getLocalizedText(
              language,
              settings?.restaurantGalleryText,
              t.restaurantGalleryText,
            )}
          </p>
        </div>

        <div className="restaurant-gallery-grid">
          <img
            src={getImageUrl(
              settings?.restaurantImageOneUrl,
              restaurantImageOne,
            )}
            alt={
              language === "sv"
                ? "Interiör från La Fornetto"
                : "Interior of La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.restaurantImageTwoUrl,
              counterImage,
            )}
            alt={
              language === "sv"
                ? "Kassa och beställningsdisk på La Fornetto"
                : "Counter and ordering area at La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.restaurantImageThreeUrl,
              saladImage,
            )}
            alt={
              language === "sv"
                ? "Sallad från La Fornetto"
                : "Salad from La Fornetto"
            }
          />

          <img
            src={getImageUrl(
              settings?.restaurantImageFourUrl,
              restaurantImageTwo,
            )}
            alt={
              language === "sv"
                ? "Sittplatser inne på La Fornetto"
                : "Indoor seating at La Fornetto"
            }
          />
        </div>
      </section>

      <GiftCardSection t={t} />

      <ContactSection
        language={language}
        t={t}
        contactEyebrow={settings?.contactEyebrow}
        contactTitle={settings?.contactTitle}
        addressText={settings?.addressText}
        phoneText={settings?.phoneText}
        instagramText={settings?.instagramText}
        emailText={settings?.emailText}
        whatsappText={settings?.whatsappText}
        winterHoursTitle={settings?.winterHoursTitle}
        winterHoursText={settings?.winterHoursText}
        summerHoursTitle={settings?.summerHoursTitle}
        summerHoursText={settings?.summerHoursText}
        mapsButtonText={settings?.mapsButtonText}
      />

      <GoogleReviewsSection t = {t}/>

      <Footer t={t} />
    </>
  );
}