import React from "react";
import { WORK } from "../data/work-list";
import { Project } from "./Project";
import useIntersectElements from "../hooks/useIntersectElement";


// Define component
export const Projects = () => {

    const [el, isIntersecting] = useIntersectElements({
        root: null,
        rootMargin: '50px',
        threshold: 0.1
    });

    return (
        <section className="container" id="work" ref={el}>
            <div className={isIntersecting ? "projects from-left animate" : "projects from-left"}>
                <h2 className="projects-heading">Projects</h2>
                <div className="projects">
                {WORK.slice(0, 5).map((item, index) => (
                    <Project data={item} index={index} key={"project" + index} />
                ))}
                </div>
            </div>
        </section>
    )
}