import React from "react";
import useIntersectElements from "../hooks/useIntersectElement";


// Define component
export const Contact = () => {

    const [el, isIntersecting] = useIntersectElements({
        root: null,
        rootMargin: '50px',
        threshold: 0.4
    })

    return (
        <section className="contact-section" id="contact" ref={el}>
            <div className="container">
                <div className={isIntersecting ? "contact from-left animate" : "contact from-left"}>
                    <div className="contact-img">
                        <img src={"./assets/img/contact.svg"} alt="about-img" />
                    </div>
                    <div className="contact-text">
                        <p className="header">Let's work together</p>
                        <h2 className="heading">Contact Me</h2>
                        <p className="para">I'm open to both on-site and remote jobs wether project based or contract based.</p>
                        <div className="contact-info">
                            <div>
                                <i className="fa-solid fa-location-dot"></i>
                                <p>Quetta, Baluchistan, Pakistan</p>
                            </div>
                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <p>+92-343-8146487</p>
                            </div>
                        </div>
                        <ul className="navlist socials">
                            <li><a href="mailto:srky420@gmail.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-envelope"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/shahrukh-khan-2b8968242/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
                            <li><a href="https://github.com/srky420" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100082964377668&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}