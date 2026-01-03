import React from "react";
import useIntersectElements from "../hooks/useIntersectElement";


// Define component
export const Project = ({ data, index }) => {

    // Intersection observer hook
    const [el, isIntersecting] = useIntersectElements({
        root: null,
        rootMargin: '50px',
        threshold: 0.25
    });

    const handleScroll = (e) => {
        const div = e.currentTarget;
        if (div.scrollHeight - div.scrollTop - div.clientHeight <= 0) {
            div.scrollTo(0, 0);
        }
        else {
            div.scrollBy(0, 250);
        }
    }

    return (
        <div className="project" ref={el}>
            {index % 2 === 0 ? 
            <>
                <div className={isIntersecting ? "project-img from-left animate" : "project-img from-left"}
                    onClick={handleScroll} 
                    onMouseOut={(e) => e.currentTarget.scrollTo(0, 0)}>
                    <img src={data.img} alt="project-img" />
                </div>
                <div className={isIntersecting ? "project-text from-right animate" : "project-text from-right"}>
                    <p className="header">{ data.name }</p>
                    <h2 className="heading">{ data.title } <a href={data.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></h2>
                    <ul className="project-tech">
                        { data.tech.map((item, index) => <li key={"tech" + index}>{ item[0].toUpperCase() + item.slice(1, ) }</li>) }
                    </ul>
                    <p className="para">{ data.desc }</p>
                </div>
            </>
            : 
            <>
                <div className={isIntersecting ? "project-text from-left animate" : "project-text from-left"}>
                    <p className="header">{ data.name }</p>
                    <h2 className="heading">{ data.title } <a href={data.link} target="_blank" rel="noreferrer"><i className="fa-solid fa-up-right-from-square"></i></a></h2>
                    <ul className="project-tech">
                        { data.tech.map((item, index) => <li key={"tech" + index}>{ item[0].toUpperCase() + item.slice(1, ) }</li>) }
                    </ul>
                    <p className="para">{ data.desc }</p>
                </div>
                <div className={isIntersecting ? "project-img from-right animate" : "project-img from-right"}
                    onClick={handleScroll} 
                    onMouseOut={(e) => e.currentTarget.scrollTo(0, 0)}>
                    <img src={data.img} alt="project-img" />
                </div>
            </>}
        </div>
    )
}