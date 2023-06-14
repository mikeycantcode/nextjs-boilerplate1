import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../src/AuthContext';
import Toolbar from './Toolbar';
import Dashboard from './Dashboard';
import { BrowserRouter as Router } from 'react-router-dom';

const M12 = () => {
    const user = useContext(AuthContext);
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        // Set the expand state to true after a delay to trigger the animation
        const timer = setTimeout(() => {
            setExpand(true);
        }, 50); // Adjust the delay as needed

        return () => {
            clearTimeout(timer);
        };
    }, []);

    if (!user) {
        // Not signed in. You can redirect to the sign-in page here.
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div
                className={`bg-white rounded-3xl p-4 transition-all duration-500 shadow-lg ${expand ? 'w-5/6 h-5/6' : 'w-16 h-16'
                    }`}
                style={{ zIndex: '2', marginTop: '-10vh' }} // Adjust the marginTop value as needed
            >
                <h1 className="text-center transition-opacity duration-500 opacity-0">
                    negro
                </h1>
            </div>
            <div className="your-element-with-z-index-minus-one"></div>
        </div>
    );
};

export default M12;
