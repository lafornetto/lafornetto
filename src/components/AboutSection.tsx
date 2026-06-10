type AboutSectionProps = {
  t: {
    aboutEyebrow: string;
    aboutTitle: string;
    aboutTextFirst: string;
    aboutTextSecond: string;
  };
};

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section className="about-section">
      <p className="eyebrow">{t.aboutEyebrow}</p>
      <h2>{t.aboutTitle}</h2>

      <p>{t.aboutTextFirst}</p>

      <p>{t.aboutTextSecond}</p>
    </section>
  );
}