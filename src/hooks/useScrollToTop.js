import { useEffect, useState } from "react";

export const useScrollToTop = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        //Add smooth scroll behavior to the document
        document.documentElement.style.scrollBehavior = "smooth";

        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 400); // Show button after scrolling down 400px
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            // Reset scroll behavior when the component unmounts
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);
    return showScrollToTop;
};
