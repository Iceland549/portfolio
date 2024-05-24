import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
};

export default Scroll;
