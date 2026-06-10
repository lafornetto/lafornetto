type LunchSectionProps = {
  t: {
    lunchEyebrow: string;
    lunchTitle: string;
    lunchText: string;
  };
};

export function LunchSection({ t }: LunchSectionProps) {
  return (
    <section id="lunch" className="lunch-section">
      <p className="eyebrow">{t.lunchEyebrow}</p>
      <h2>{t.lunchTitle}</h2>
      <p>{t.lunchText}</p>
    </section>
  );
}