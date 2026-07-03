import type { Dispatch, SetStateAction } from "react";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { LunchSection } from "../components/LunchSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CateringSection } from "../components/CateringSection";
import { GiftCardSection } from "../components/GiftCardSection";

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

import { NewsSection } from "../components/NewsSection";

type HomePageProps = {
  language: "sv" | "en";
  setLanguage: Dispatch<SetStateAction<"sv" | "en">>;
  t: {
    navMenu: string;
    navLunch: string;
    navContact: string;

    heroEyebrow: string;
    heroTitle: string;
    heroText: string;
    callButton: string;
    menuButton: string;

    aboutEyebrow: string;
    aboutTitle: string;
    aboutTextFirst: string;
    aboutTextSecond: string;

    menuPageBack: string;
    menuPageEyebrow: string;
    menuPageTitle: string;
    menuPageText: string;

    lunchEyebrow: string;
    lunchTitle: string;
    lunchText: string;

    restaurantGalleryEyebrow: string;
    restaurantGalleryTitle: string;
    restaurantGalleryText: string;

    giftCardEyebrow: string;
    giftCardTitle: string;
    giftCardText: string;
    giftCardText2: string;
    giftCardNote: string;
    giftCardImageAlt: string;

    contactEyebrow: string;
    contactTitle: string;

    contactAddressLabel: string;
    contactPhoneLabel: string;
    contactInstagramLabel: string;

    contactWinterHoursTitle: string;
    contactSummerHoursTitle: string;

    contactMondayThursday: string;
    contactFridaySaturday: string;
    contactSunday: string;

    contactOpenMapsButton: string;
    contactMapTitle: string;

    footerCopyright: string;
    footerQrText: string;
    footerQrAlt: string;
  };
};

export function HomePage({ language, setLanguage, t }: HomePageProps) {
  return (
    <>
      <Hero language={language} setLanguage={setLanguage} t={t} />

      <NewsSection language={language} />

      <AboutSection t={t} />
      <section className="about-food-gallery">
        <div className="about-food-gallery-grid">
          <img src={pizzaThreeImage} alt="Pizza från La Fornetto" />
          <img src={pastaTwoImage} alt="Pasta från La Fornetto" />
          <img src={saladTwoImage} alt="Sallad från La Fornetto" />
        </div>
      </section>
      <LunchSection t={t} />

      <section className="food-gallery">
        <div className="section-heading">
          <p className="eyebrow">Något för alla smaker</p>
          <h2>Favoriter från vår meny</h2>
          <p>Pizza, kebab, grillrätter, sallader och mycket mer.</p>
        </div>

        <div className="food-gallery-grid">
          <img src={pizzaImage} alt="Pizza från La Fornetto" />
          <img src={kebabImage} alt="Kebab från La Fornetto" />
          <img src={pastaImage} alt="Mat från La Fornetto" />
        </div>
      </section>

      <CateringSection />
      <section className="restaurant-gallery">
        <div className="section-heading">
          <p className="eyebrow">{t.restaurantGalleryEyebrow}</p>
        <h2>{t.restaurantGalleryTitle}</h2>
        <p>{t.restaurantGalleryText}</p>
        </div>

        <div className="restaurant-gallery-grid">
          <img
            src={restaurantImageOne}
            alt="Interiör från La Fornetto"
          />

          <img
            src={counterImage}
            alt="Kassa och beställningsdisk på La Fornetto"
          />

          <img
            src={saladImage}
            alt="Sallad från La Fornetto"
          />

          <img
            src={restaurantImageTwo}
            alt="Sittplatser inne på La Fornetto"
          />
        </div>
      </section>
      <GiftCardSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </>
  );
}