import type { Dispatch, SetStateAction } from "react";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { LunchSection } from "../components/LunchSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CateringSection } from "../components/CateringSection";

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
      <AboutSection t={t} />
      <LunchSection t={t} />
      <CateringSection />
      <ContactSection t={t} />
      <Footer t={t} />
    </>
  );
}