import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AnimateRoute = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const mainContent = document.querySelector('.transition-opacity');

        if (mainContent) {
            mainContent.classList.add('opacity-100');
            mainContent.classList.remove('opacity-0');
        }
    }, [location]);

    return <div>{children}</div>;
};

export default AnimateRoute;
