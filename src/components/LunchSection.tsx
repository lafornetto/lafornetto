type LunchSectionProps = {
  t: {
    lunchEyebrow: string;
    lunchTitle: string;
    lunchText: string;
  };

  lunchEyebrow?: string | null;
  lunchTitle?: string | null;
  lunchText?: string | null;

  lunchImageOneUrl: string;
  lunchImageTwoUrl: string;
  lunchImageThreeUrl: string;
};

export function LunchSection({
  t,
  lunchEyebrow,
  lunchTitle,
  lunchText,
  lunchImageOneUrl,
  lunchImageTwoUrl,
  lunchImageThreeUrl,
}: LunchSectionProps) {
  return (
    <section id="lunch" className="lunch-section">
      <div className="lunch-content">
        <p className="eyebrow">
          {lunchEyebrow || t.lunchEyebrow}
        </p>

        <h2>{lunchTitle || t.lunchTitle}</h2>

        <p className="lunch-text">
          {lunchText || t.lunchText}
        </p>
      </div>

      <div className="lunch-gallery-grid">
        <img
          src={lunchImageOneUrl}
          alt="Lunchrätt från La Fornetto"
        />

        <img
          src={lunchImageTwoUrl}
          alt="Lunch från La Fornetto"
        />

        <img
          src={lunchImageThreeUrl}
          alt="Mat från La Fornetto"
        />
      </div>
    </section>
  );
}