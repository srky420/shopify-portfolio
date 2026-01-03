import React from "react";
import useIntersectElements from "../hooks/useIntersectElement";


// Define component
export const Hero = () => {

  const [el, isIntersecting] = useIntersectElements({
    root: null,
    rootMargin: '50px',
    threshold: 1.0
  });

  return (
    <section className="container hero-section" ref={el}>
        <div className="hero">
            <div className={isIntersecting ? "hero-text from-left animate" : "hero-text from-left"}>
                <p className="header">Hi I'm Shahrukh</p>
                <h1>A <span className="shine">Shopify</span> Developer</h1>
                <a className="btn hero-btn" href={"./assets/resume.pdf"} target="_blank" download="Shahrukh-Resume" rel="noreferrer">Résumé</a>
                <a className="btn hero-btn-outline" href="#work">Projects</a>
            </div>
            <div className={isIntersecting ? "hero-img from-right animate": "hero-img from-right"}>
              <img src={"./assets/img/profile.png"} alt="profile-img" />
              <div className="profile-overlay"></div>
            </div>
            <img src={"./assets/img/spiral-arrow.svg"} alt="arrow" className="arrow-decor" />
            <img src={"./assets/img/three-lines.svg"} alt="line" className="line-decor" />
        </div>
    </section>
  )
}
