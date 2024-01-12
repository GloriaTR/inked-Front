import { useEffect, useState } from "react";
import Button from "../Button/Button";
import { FaAngleUp } from "react-icons/fa";
import "./ScrollButton.css";

const ScrollButton = (): React.ReactElement => {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopButton && (
        <Button className="button button-position" actionOnClick={scrollToTop}>
          <FaAngleUp className="icon-style" aria-label="Scroll to top button" />
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
