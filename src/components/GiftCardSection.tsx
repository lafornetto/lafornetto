import giftCardImage from "../assets/images/la-fornetto-presentkort.jpg";

type GiftCardSectionProps = {
  t: {
    giftCardEyebrow: string;
    giftCardTitle: string;
    giftCardText: string;
    giftCardText2: string;
    giftCardNote: string;
  };
};

export function GiftCardSection({ t }: GiftCardSectionProps) {
  return (
    <section className="gift-card-section">
      <div className="gift-card-container">
        <div className="gift-card-content">
          <p className="gift-card-eyebrow">{t.giftCardEyebrow}</p>
          <h2>{t.giftCardTitle}</h2>

          <p className="gift-card-text">{t.giftCardText}</p>
          <p className="gift-card-text">{t.giftCardText2}</p>

          <div className="gift-card-note">
            <strong>{t.giftCardNote}</strong>
          </div>
        </div>

        <div className="gift-card-image-wrapper">
          <img
            src={giftCardImage}
            alt="La Fornetto presentkort"
            className="gift-card-image"
          />
        </div>
      </div>
    </section>
  );
}