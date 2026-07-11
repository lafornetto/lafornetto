type ContactSectionProps = {
  t: {
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
  };

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

function getWhatsAppUrl(phoneNumber: string) {
  const normalizedNumber = phoneNumber.replace(/\D/g, "");

  return `https://wa.me/${normalizedNumber}`;
}

export function ContactSection({
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
  const displayedEmail = emailText || "lafornetto@hotmail.com";
  const displayedWhatsApp = whatsappText || "+46 73 546 99 61";

  const defaultWinterHours = `${t.contactMondayThursday}: 11:00–21:00
${t.contactFridaySaturday}: 11:00–22:00
${t.contactSunday}: 12:00–21:00`;

  const defaultSummerHours = `${t.contactMondayThursday}: 11:00–22:00
${t.contactFridaySaturday}: 11:00–23:00
${t.contactSunday}: 11:00–22:00`;

  return (
    <section id="contact" className="contact-section-dark">
      <div className="contact-inner">
        <div className="contact-content">
          <p className="eyebrow">
            {contactEyebrow || t.contactEyebrow}
          </p>

          <h2>{contactTitle || t.contactTitle}</h2>

          <p>
            <strong>{t.contactAddressLabel}:</strong>{" "}
            {addressText || "Östanåvägen 15, 814 70 Älvkarleby"}
          </p>

          <p>
            <strong>{t.contactPhoneLabel}:</strong>{" "}
            {phoneText || "026-82 120"}
          </p>

          <p>
            <strong>{t.contactInstagramLabel}:</strong>{" "}
            {instagramText || "@Lafornetto2025"}
          </p>

          <p>
            <strong>E-post:</strong>{" "}
            <a href={`mailto:${displayedEmail}`}>
              {displayedEmail}
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href={getWhatsAppUrl(displayedWhatsApp)}
              target="_blank"
              rel="noreferrer"
            >
              {displayedWhatsApp}
            </a>
          </p>

          <div className="opening-hours">
            <strong>
              {winterHoursTitle || t.contactWinterHoursTitle}
            </strong>

            <span className="opening-hours-text">
              {winterHoursText || defaultWinterHours}
            </span>
          </div>

          <div className="opening-hours">
            <strong>
              {summerHoursTitle || t.contactSummerHoursTitle}
            </strong>

            <span className="opening-hours-text">
              {summerHoursText || defaultSummerHours}
            </span>
          </div>

          <a
            className="maps-light-btn"
            href="https://www.google.com/maps/search/?api=1&query=Östanåvägen+15+81470+Älvkarleby"
            target="_blank"
            rel="noreferrer"
          >
            {mapsButtonText || t.contactOpenMapsButton}
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title={t.contactMapTitle}
            src="https://www.google.com/maps?q=Östanåvägen%2015%2C%20814%2070%20Älvkarleby&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}