import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Toolbar = ({ onPageChange }) => {
    const [isToolbarVisible, setToolbarVisible] = useState(true);

    const toggleToolbarVisibility = () => {
        setToolbarVisible(!isToolbarVisible);
    };

    return (
        <div className={`bg-zinc-900 text-zinc-50 w-1/6 h-screen z-10 ${isToolbarVisible ? '' : 'hidden'}`}>
            {/* Toolbar */}
            <div className="p-4">
                <h1 className="text-xl font-bold">Console</h1>
                <ul className="mt-6">
                    <li>
                        <Link to="/dashboard" className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                            <span className="h-4 w-4 mr-2 rounded-full bg-red-500"></span>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage-joi" className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                            <span className="h-4 w-4 mr-2 rounded-full bg-green-500"></span>
                            Manage Joi
                        </Link>
                    </li>
                    <li>
                        <Link to="/payment" className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                            <span className="h-4 w-4 mr-2 rounded-full bg-blue-500"></span>
                            Payment
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                            <span className="h-4 w-4 mr-2 rounded-full bg-yellow-500"></span>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link to="/help" className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                            <span className="h-4 w-4 mr-2 rounded-full bg-indigo-500"></span>
                            Help
                        </Link>
                    </li>
                    <li>
                        <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none" onClick={toggleToolbarVisibility}>
                            <span className="h-4 w-4 mr-2 rounded-full bg-gray-500"></span>
                            {isToolbarVisible ? 'Hide' : 'Show'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Toolbar;
