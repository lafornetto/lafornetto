import qrCode from "../assets/images/url-qr-code.png";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <p>© 2026 La Fornetto Älvkarleby. Alla rättigheter förbehållna.</p>
      </div>

      <div className="footer-links">
        <a
          href="https://www.facebook.com/profile.php?id=100054200664793"
          target="_blank"
          rel="noreferrer"
        >
          Facebook
        </a>

        <a
          href="https://www.instagram.com/lafornetto2025/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>

      <div className="footer-qr">
        <p>Skanna för meny</p>
        <img src={qrCode} alt="QR-kod till menyn" />
      </div>
    </footer>
  );
}