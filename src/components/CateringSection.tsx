type CateringSectionProps = {
  cateringEyebrow?: string | null;
  cateringTitle?: string | null;
  cateringTextOne?: string | null;
  cateringTextTwo?: string | null;
  cateringContactButtonText?: string | null;
};

export function CateringSection({
  cateringEyebrow,
  cateringTitle,
  cateringTextOne,
  cateringTextTwo,
  cateringContactButtonText,
}: CateringSectionProps) {
  return (
    <section className="catering-wrapper">
      <div className="catering-section">
        <p className="eyebrow">
          {cateringEyebrow || "CATERING & STORA SÄLLSKAP"}
        </p>

        <h2>
          {cateringTitle || "Mat för fest, företag och stora tillfällen"}
        </h2>

        <p>
          {cateringTextOne ||
            "Vi hjälper till med mat till bröllop, företagsmiddagar, föreningar, större event och privata fester."}
        </p>

        <p>
          {cateringTextTwo ||
            "Kontakta oss i god tid så tar vi fram ett upplägg som passar ert sällskap."}
        </p>

        <div className="catering-actions">
          <a className="primary-btn" href="#contact">
            {cateringContactButtonText || "Kontakta oss för catering"}
          </a>

          <a
            href="/documents/la-fornetto-bestallningsblankett.pdf"
            download
            className="catering-download-button"
          >
            Ladda ner beställningsblankett
          </a>
        </div>
      </div>
    </section>
  );
}