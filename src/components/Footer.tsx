import qrCode from "../assets/images/url-qr-code.png";

type FooterProps = {
  t: {
    footerCopyright: string;
    footerQrText: string;
    footerQrAlt: string;
  };
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-left">
        <p>{t.footerCopyright}</p>
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
        <p>{t.footerQrText}</p>
        <img src={qrCode} alt={t.footerQrAlt} />
      </div>
    </footer>
  );
}