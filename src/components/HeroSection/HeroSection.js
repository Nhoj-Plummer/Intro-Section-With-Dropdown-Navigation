import React from "react"
import "./HeroSection.css"
import {DesktopImg, MobileImg, Databiz, Audiophile, Meet, Maker} from "../../assets/assestindex"

const BrandItem = ({brand}) => {
  return (
    <div>
      <img src={brand} alt="brand" />
    </div>
  )
}

const HeroSection = () => {
  return (
    <div className="hero-section_container section-padding">
      <div className="hero-section_image">
        <picture>
          <source media="(min-width: 541px)" srcSet={DesktopImg} />
          <img src={MobileImg} alt="img" />
        </picture>
      </div>
      <div className="hero-section_text">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline Processes, create team rituals, and watch productivity soar.</p>
        <button>
          <p>Learn More</p>
        </button>
      </div>
      <div className="hero-section_brands">
        <BrandItem brand={Databiz} />
        <BrandItem brand={Audiophile} />
        <BrandItem brand={Meet} />
        <BrandItem brand={Maker} />
      </div>
    </div>
  )
}

export default HeroSection
