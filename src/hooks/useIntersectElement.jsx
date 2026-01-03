import { useEffect, useRef, useState } from "react";


export default function useIntersectElements(options) {
    // Element reference
    const el = useRef(null);

    // State hook
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [intersected, setIntersected] = useState(false);

    // Callback func
    const cb = ([entry]) => {
        if (entry.isIntersecting && !intersected) {
            setIntersected(true);
            setIsIntersecting(true);
        }
    };
    
    // Effect hook
    useEffect(() => {
        // Observer element
        const observer = new IntersectionObserver(cb, options);
        const elem = el.current;

        if(elem) {
            observer.observe(elem);
        }

        // Clean up
        return () => {
            if (elem) {
                observer.unobserve(elem);
            }
        }
    }, [])

    return [el, isIntersecting];
}