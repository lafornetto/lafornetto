export function GoogleReviewsSection() {
  return (
    <section className="google-reviews-section">
      <div className="google-reviews-content">
        <p className="google-reviews-eyebrow">Vad våra kunder tycker</p>

        <h2>La Fornetto på Google</h2>

        <div className="google-rating">
          <strong>4,2</strong>

          <div>
            <div
              className="google-stars"
              aria-label="4,2 av 5 stjärnor"
            >
              ★★★★★
            </div>

            <p>287 Google-recensioner</p>
          </div>
        </div>

        <div className="google-reviews-buttons">
          <a
            href="https://maps.app.goo.gl/hRViuC71J2ComJPv5"
            target="_blank"
            rel="noreferrer"
            className="google-review-button secondary"
          >
            Läs recensioner
          </a>

          <a
            href="https://g.page/r/CTl9DrD09O3aEBM/review"
            target="_blank"
            rel="noreferrer"
            className="google-review-button primary"
          >
            Lämna en recension
          </a>
        </div>
      </div>
    </section>
  );
}