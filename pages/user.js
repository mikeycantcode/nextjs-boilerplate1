import React, { useContext } from 'react';
import { AuthContext } from '../src/AuthContext';
import Toolbar from './Toolbar';
import Dashboard from './Dashboard';

const UserPage = () => {
    const user = useContext(AuthContext);

    if (!user) {
        // Not signed in. You can redirect to the sign-in page here.
        return null;
    }

    return (
        <div className="flex bg-zinc-200">
            <img
                src="https://img.freepik.com/free-vector/white-background-with-zigzag-pattern-design_1017-33197.jpg?w=2000&t=st=1686514649~exp=1686515249~hmac=834d6e3511f28271750ad517cfb849d6268e5f2715178e630d32f2b51f5e2b2c"
                alt="Logo"
                class="w-full opacity-10 h-full absolute inset-0 z-1"
            />
            {/* Toolbar start */}
            <Toolbar />
            {/* Toolbar end */}

            {/* Main Content */}
            <div className="w-4/5 p-4">
                {/* User-specific content */}
                <div className="flex items-center justify-end mb-4">
                    <div className="rounded-full bg-orange-50 shadow-md flex items-center justify-center h-8 mr-2 px-3 inline-flex">
                        <span className="text-sm text-gray-900">Logged in as {user.displayName}</span>
                        <span className="h-2 w-2 bg-green-500 rounded-full ml-1"></span>
                    </div>
                </div>

                {/* Dashboard section */}
                <div class="z-10">
                    <Dashboard />
                </div>
                {/* Rest of the content */}
            </div>
        </div>
    );
};

export default UserPage;
