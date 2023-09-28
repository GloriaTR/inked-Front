import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./Footer.css";

const Footer = (): React.ReactElement => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user && (
        <footer className="footer">
          <img
            src="/img/logoInkedFooter.webp"
            alt="Inked company logo"
            width="32"
            height="37"
          />
          <div className="footer__company-data">
            <span>© 2023 inked, Ltd</span>
            <span>Diputació, 37, 08015, Barcelona</span>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
