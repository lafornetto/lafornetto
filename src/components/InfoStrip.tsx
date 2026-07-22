import type { Translation } from "../data/translations";

type InfoStripProps = {
  t: Translation;
};

export function InfoStrip({ t }: InfoStripProps) {
  return (
    <section className="info-strip">
      <div>
        <strong>{t.contactPhoneLabel}</strong>
        <span>026-82 120</span>
      </div>

      <div>
        <strong>{t.contactAddressLabel}</strong>
        <span>Östanåvägen 15, 814 70 Älvkarleby</span>
      </div>

      <div>
        <strong>{t.contactInstagramLabel}</strong>
        <span>@Lafornetto2025</span>
      </div>
    </section>
  );
}