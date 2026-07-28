import type { Translation } from "../data/translations";

type GoogleReviewsSectionProps = {
  t: Translation;
};

export function GoogleReviewsSection({
  t,
}: GoogleReviewsSectionProps) {
  return (
    <section className="google-reviews-section">
      <div className="google-reviews-content">
        <p className="google-reviews-eyebrow">
          {t.googleReviewsEyebrow}
        </p>

        <h2>{t.googleReviewsTitle}</h2>

        <div className="google-rating">
          <strong>{t.googleReviewsRatingValue}</strong>

          <div>
            <div
              className="google-stars"
              aria-label={t.googleReviewsRatingLabel}
            >
              ★★★★★
            </div>

            <p>{t.googleReviewsCount}</p>
          </div>
        </div>

        <div className="google-reviews-buttons">
          <a
            href="https://maps.app.goo.gl/hRViuC71J2ComJPv5"
            target="_blank"
            rel="noreferrer"
            className="google-review-button secondary"
          >
            {t.googleReviewsReadButton}
          </a>

          <a
            href="https://g.page/r/CTl9DrD09O3aEBM/review"
            target="_blank"
            rel="noreferrer"
            className="google-review-button primary"
          >
            {t.googleReviewsWriteButton}
          </a>
        </div>
      </div>
    </section>
  );
}