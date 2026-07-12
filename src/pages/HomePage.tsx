import type { Dispatch, SetStateAction } from "react";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { LunchSection } from "../components/LunchSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CateringSection } from "../components/CateringSection";
import { GiftCardSection } from "../components/GiftCardSection";
import { NewsSection } from "../components/NewsSection";

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

function getImageUrl(imageUrl: string | null | undefined, fallback: string) {
  if (!imageUrl) {
    return fallback;
  }

  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  return `${API_URL}${imageUrl}`;
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
  language: "sv" | "en";
  setLanguage: Dispatch<SetStateAction<"sv" | "en">>;
  settings: RestaurantSettings | null;
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
        newsImageOneUrl={settings?.newsImageOneUrl}
        newsImageTwoUrl={settings?.newsImageTwoUrl}
        newsImageThreeUrl={settings?.newsImageThreeUrl}
        newsEyebrow={settings?.newsEyebrow}
        newsTitle={settings?.newsTitle}
        newsText={settings?.newsText}
      />

      <AboutSection
        t={t}
        aboutEyebrow={settings?.aboutEyebrow}
        aboutTitle={settings?.aboutTitle}
        aboutText={settings?.aboutText}
      />

      <section className="about-food-gallery">
        <div className="about-food-gallery-grid">
          <img
            src={getImageUrl(settings?.aboutImageOneUrl, pizzaThreeImage)}
            alt="Pizza från La Fornetto"
          />

          <img
            src={getImageUrl(settings?.aboutImageTwoUrl, pastaTwoImage)}
            alt="Pasta från La Fornetto"
          />

          <img
            src={getImageUrl(settings?.aboutImageThreeUrl, saladTwoImage)}
            alt="Sallad från La Fornetto"
          />
        </div>
      </section>

      <LunchSection
        t={t}
        lunchEyebrow={settings?.lunchEyebrow}
        lunchTitle={settings?.lunchTitle}
        lunchText={settings?.lunchText}
        lunchImageOneUrl={getImageUrl(
          settings?.lunchImageOneUrl,
          pizzaImage
        )}
        lunchImageTwoUrl={getImageUrl(
          settings?.lunchImageTwoUrl,
          kebabImage
        )}
        lunchImageThreeUrl={getImageUrl(
          settings?.lunchImageThreeUrl,
          pastaImage
        )}
      />

      <section className="food-gallery">
        <div className="section-heading">
          <p className="eyebrow">
            {settings?.foodSectionEyebrow || "Något för alla smaker"}
          </p>

          <h2>
            {settings?.foodSectionTitle || "Favoriter från vår meny"}
          </h2>

          <p>
            {settings?.foodSectionText ||
              "Pizza, kebab, grillrätter, sallader och mycket mer."}
          </p>
        </div>

        <div className="food-gallery-grid">
          <img
            src={getImageUrl(settings?.foodImageOneUrl, pizzaImage)}
            alt="Pizza från La Fornetto"
          />

          <img
            src={getImageUrl(settings?.foodImageTwoUrl, kebabImage)}
            alt="Kebab från La Fornetto"
          />

          <img
            src={getImageUrl(settings?.foodImageThreeUrl, pastaImage)}
            alt="Mat från La Fornetto"
          />
        </div>
      </section>

      <CateringSection
        cateringEyebrow={settings?.cateringEyebrow}
        cateringTitle={settings?.cateringTitle}
        cateringTextOne={settings?.cateringTextOne}
        cateringTextTwo={settings?.cateringTextTwo}
        cateringContactButtonText={settings?.cateringContactButtonText}
      />

      <section className="restaurant-gallery">
        <div className="section-heading">
          <p className="eyebrow">
            {settings?.restaurantGalleryEyebrow || t.restaurantGalleryEyebrow}
          </p>

          <h2>
            {settings?.restaurantGalleryTitle || t.restaurantGalleryTitle}
          </h2>

          <p>
            {settings?.restaurantGalleryText || t.restaurantGalleryText}
          </p>
        </div>

        <div className="restaurant-gallery-grid">
          <img
            src={getImageUrl(
              settings?.restaurantImageOneUrl,
              restaurantImageOne
            )}
            alt="Interiör från La Fornetto"
          />

          <img
            src={getImageUrl(settings?.restaurantImageTwoUrl, counterImage)}
            alt="Kassa och beställningsdisk på La Fornetto"
          />

          <img
            src={getImageUrl(settings?.restaurantImageThreeUrl, saladImage)}
            alt="Sallad från La Fornetto"
          />

          <img
            src={getImageUrl(
              settings?.restaurantImageFourUrl,
              restaurantImageTwo
            )}
            alt="Sittplatser inne på La Fornetto"
          />
        </div>
      </section>

      <GiftCardSection t={t} />
      <ContactSection
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
      <Footer t={t} />
    </>
  );
}