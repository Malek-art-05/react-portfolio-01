import { useEffect, useRef, useState } from "react";

// Fades its children in from a slight blur when they scroll into view (Magic UI's BlurFade, in plain CSS).
const BlurFade = ({ children, delay = 0, yOffset = 6, blur = 6, className = "" }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setVisible(true);
                observer.disconnect();
            }
        }, { rootMargin: "-50px" });
        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`motion-reduce:!opacity-100 motion-reduce:!transform-none motion-reduce:!filter-none ${className}`}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : `translateY(${-yOffset}px)`,
                filter: visible ? "none" : `blur(${blur}px)`,
                transition: "opacity 0.4s ease-out, transform 0.4s ease-out, filter 0.4s ease-out",
                transitionDelay: `${0.04 + delay}s`,
            }}
        >
            {children}
        </div>
    );
};

export default BlurFade;
