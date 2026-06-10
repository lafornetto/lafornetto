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
};

export function ContactSection({ t }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section-dark">
      <div className="contact-inner">
        <div className="contact-content">
          <p className="eyebrow">{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>

          <p>
            <strong>{t.contactAddressLabel}:</strong> Östanåvägen 15, 814 70 Älvkarleby
          </p>

          <p>
            <strong>{t.contactPhoneLabel}:</strong> 026-82 120
          </p>

          <p>
            <strong>{t.contactInstagramLabel}:</strong> @Lafornetto2025
          </p>

          <div className="opening-hours">
            <strong>{t.contactWinterHoursTitle}</strong>
            <span>{t.contactMondayThursday}: 11:00–21:00</span>
            <span>{t.contactFridaySaturday}: 11:00–22:00</span>
            <span>{t.contactSunday}: 12:00–21:00</span>
          </div>

          <div className="opening-hours">
            <strong>{t.contactSummerHoursTitle}</strong>
            <span>{t.contactMondayThursday}: 11:00–22:00</span>
            <span>{t.contactFridaySaturday}: 11:00–23:00</span>
            <span>{t.contactSunday}: 11:00–22:00</span>
          </div>

          <a
            className="maps-light-btn"
            href="https://www.google.com/maps/search/?api=1&query=Östanåvägen+15+81470+Älvkarleby"
            target="_blank"
            rel="noreferrer"
          >
            {t.contactOpenMapsButton}
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title={t.contactMapTitle}
            src="https://www.google.com/maps?q=Östanåvägen%2015%2C%20814%2070%20Älvkarleby&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}