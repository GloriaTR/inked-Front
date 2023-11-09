import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-title-logo">
          <img
            className="header__logo"
            src="/img/logoInkedHeader.webp"
            alt="Inked logo"
            width="46"
            height="53"
          />
          <h1 className="header__title">inked</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
