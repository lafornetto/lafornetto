type AboutSectionProps = {
  t: {
    aboutEyebrow: string;
    aboutTitle: string;
    aboutTextFirst: string;
    aboutTextSecond: string;
  };
  aboutEyebrow?: string | null;
  aboutTitle?: string | null;
  aboutText?: string | null;
};

export function AboutSection({
  t,
  aboutEyebrow,
  aboutTitle,
  aboutText,
}: AboutSectionProps) {
  return (
    <section className="about-section">
      <p className="eyebrow">{aboutEyebrow || t.aboutEyebrow}</p>

      <h2>{aboutTitle || t.aboutTitle}</h2>

      {aboutText ? (
        <p>{aboutText}</p>
      ) : (
        <>
          <p>{t.aboutTextFirst}</p>
          <p>{t.aboutTextSecond}</p>
        </>
      )}
    </section>
  );
}