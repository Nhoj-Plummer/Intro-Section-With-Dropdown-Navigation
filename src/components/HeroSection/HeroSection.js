import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import {
  DesktopImg,
  MobileImg,
  Databiz,
  Audiophile,
  Meet,
  Maker,
} from "../../assets/assestindex";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="hero-section_container">
      {/* Content Wrapper for Text and Logos */}
      <div className="hero-section_content">
        {/* Text Section */}
        <div className="hero-section_text">
          <h1>
            Make
            <br style={isMobile ? { display: "none" } : {}} /> remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button>Learn More</button>
        </div>

        {/* Brand Logos Section */}
        <div className="hero-section_brands">
          <img src={Databiz} alt="Databiz" />
          <img src={Audiophile} alt="Audiophile" />
          <img src={Meet} alt="Meet" />
          <img src={Maker} alt="Maker" />
        </div>
      </div>

      {/* Image Section */}
      <div className="hero-section_image">
        <img
          src={isMobile ? MobileImg : DesktopImg}
          alt="Illustration of remote work productivity"
        />
      </div>
    </div>
  );
};

export default HeroSection;
