import type { Translation } from "../data/translations";

type Language = "sv" | "en";

type ContactSectionProps = {
  language: Language;
  t: Translation;

  contactEyebrow?: string | null;
  contactTitle?: string | null;

  addressText?: string | null;
  phoneText?: string | null;
  instagramText?: string | null;
  emailText?: string | null;
  whatsappText?: string | null;

  winterHoursTitle?: string | null;
  winterHoursText?: string | null;

  summerHoursTitle?: string | null;
  summerHoursText?: string | null;

  mapsButtonText?: string | null;
};

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

function getWhatsAppUrl(phoneNumber: string) {
  const normalizedNumber = phoneNumber.replace(/\D/g, "");

  return `https://wa.me/${normalizedNumber}`;
}

export function ContactSection({
  language,
  t,
  contactEyebrow,
  contactTitle,
  addressText,
  phoneText,
  instagramText,
  emailText,
  whatsappText,
  winterHoursTitle,
  winterHoursText,
  summerHoursTitle,
  summerHoursText,
  mapsButtonText,
}: ContactSectionProps) {
  const displayedEmail =
    emailText?.trim() || "lafornetto@hotmail.com";

  const displayedWhatsApp =
    whatsappText?.trim() || "+46 73 546 99 61";

  const displayedContactEyebrow = getLocalizedText(
    language,
    contactEyebrow,
    t.contactEyebrow,
  );

  const displayedContactTitle = getLocalizedText(
    language,
    contactTitle,
    t.contactTitle,
  );

  const displayedWinterHoursTitle = getLocalizedText(
    language,
    winterHoursTitle,
    t.contactWinterHoursTitle,
  );

  const displayedSummerHoursTitle = getLocalizedText(
    language,
    summerHoursTitle,
    t.contactSummerHoursTitle,
  );

  const displayedMapsButtonText = getLocalizedText(
    language,
    mapsButtonText,
    t.contactOpenMapsButton,
  );

  const defaultWinterHours = `${t.contactMondayThursday}: 11:00–21:00
${t.contactFridaySaturday}: 11:00–22:00
${t.contactSunday}: 12:00–21:00`;

  const defaultSummerHours = `${t.contactMondayThursday}: 11:00–22:00
${t.contactFridaySaturday}: 11:00–23:00
${t.contactSunday}: 11:00–22:00`;

  const displayedWinterHours =
    language === "en"
      ? defaultWinterHours
      : winterHoursText?.trim() || defaultWinterHours;

  const displayedSummerHours =
    language === "en"
      ? defaultSummerHours
      : summerHoursText?.trim() || defaultSummerHours;

  const mapLanguage = language === "sv" ? "sv" : "en";

  const mapUrl =
    `https://www.google.com/maps?q=` +
    `Östanåvägen%2015%2C%20814%2070%20Älvkarleby` +
    `&output=embed&hl=${mapLanguage}`;

  return (
    <section id="contact" className="contact-section-dark">
      <div className="contact-inner">
        <div className="contact-content">
          <p className="eyebrow">
            {displayedContactEyebrow}
          </p>

          <h2>{displayedContactTitle}</h2>

          <p>
            <strong>{t.contactAddressLabel}:</strong>{" "}
            {addressText?.trim() ||
              "Östanåvägen 15, 814 70 Älvkarleby"}
          </p>

          <p>
            <strong>{t.contactPhoneLabel}:</strong>{" "}
            {phoneText?.trim() || "026-82 120"}
          </p>

          <p>
            <strong>{t.contactInstagramLabel}:</strong>{" "}
            {instagramText?.trim() || "@Lafornetto2025"}
          </p>

          <p>
            <strong>{t.contactEmailLabel}:</strong>{" "}
            <a href={`mailto:${displayedEmail}`}>
              {displayedEmail}
            </a>
          </p>

          <p>
            <strong>{t.contactWhatsappLabel}:</strong>{" "}
            <a
              href={getWhatsAppUrl(displayedWhatsApp)}
              target="_blank"
              rel="noreferrer"
            >
              {displayedWhatsApp}
            </a>
          </p>

          <div className="opening-hours">
            <strong>{displayedWinterHoursTitle}</strong>

            <span className="opening-hours-text">
              {displayedWinterHours}
            </span>
          </div>

          <div className="opening-hours">
            <strong>{displayedSummerHoursTitle}</strong>

            <span className="opening-hours-text">
              {displayedSummerHours}
            </span>
          </div>

          <a
            className="maps-light-btn"
            href="https://www.google.com/maps/search/?api=1&query=Östanåvägen+15+81470+Älvkarleby"
            target="_blank"
            rel="noreferrer"
          >
            {displayedMapsButtonText}
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title={t.contactMapTitle}
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}