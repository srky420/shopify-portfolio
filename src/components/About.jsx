import React from "react";
import useIntersectElements from "../hooks/useIntersectElement";
import { ABOUT } from "../data/about-me";


// Define component
export const About = () => {

    const [el, isIntersecting] = useIntersectElements({
        root: null,
        rootMargin: '50px',
        threshold: 0.5
    })

    return (
        <section className="about-section" id="about" ref={el}>
            <div className="container">
                <div className={isIntersecting ? "about from-right animate" : "about from-right"}>
                    <div className="about-img">
                        <img src={"./assets/img/about.svg"} alt="about-img" />
                    </div>
                    <div className="about-text">
                        <p className="header">About me</p>
                        <h2 className="heading">A <em style={{color: "#95BF47"}}>Shopify</em> Developer</h2>
                        <p className="para">
                            {ABOUT.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
