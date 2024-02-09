import React, { useState, useEffect } from "react";
import "./styles/ScrollButton.css";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="div_btn_smoot">
      <i
        className={`bx bx-chevrons-up scroll-button ${
          isVisible ? "visible" : ""
        }`}
        onClick={handleButtonClick}
      ></i>
    </div>
  );
};

export default ScrollButton;
