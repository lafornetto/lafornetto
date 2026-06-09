import { Link } from "react-router-dom";
import { MenuSection } from "../components/MenuSection";
import { Footer } from "../components/Footer";

export function MenuPage() {
  return (
    <>
      <section className="menu-page-hero">
        <Link to="/" className="back-link">
          ← Till startsidan
        </Link>

        <p className="eyebrow">La Fornetto Älvkarleby</p>
        <h1>Meny</h1>
        <p>Här hittar du hela vår meny med pizzor, kebab, grillrätter och lunch.</p>
      </section>

      <MenuSection />
      <Footer />
    </>
  );
}