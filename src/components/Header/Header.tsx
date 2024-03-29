import "./Header.css";

const Header = (): React.ReactElement => {
  return (
    <header className="header">
      <div className="header-logo-title">
        <img
          src="/img/logoInkedHeader.webp"
          alt="Inked logo"
          width="40"
          height="46"
        />
        <h1 className="header__title">inked</h1>
      </div>
    </header>
  );
};

export default Header;
