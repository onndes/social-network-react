import { useEffect, useState } from "react";

const withWindowWidth = (Component) => {
    return (props) => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);
        useEffect(() => {
            const hundleSetWindowWidth = () => setWindowWidth(window.innerWidth);
            window.addEventListener("resize", hundleSetWindowWidth);
            return () => window.removeEventListener("resize", hundleSetWindowWidth);
        }, [windowWidth]);

        return <Component {...props} windowWidth={windowWidth} />;
    };
};
export default withWindowWidth;
