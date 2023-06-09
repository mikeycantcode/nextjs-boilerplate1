import React, { useContext } from 'react';
import { AuthContext } from '../src/AuthContext';
import Toolbar from '../src/components/Toolbar';

const UserPage = () => {
    const user = useContext(AuthContext);

    if (!user) {
        // Not signed in. You can redirect to the sign-in page here.
        return null;
    }

    return (
        <div className="flex" style={{ backgroundColor: '#555555' }}>
            <Toolbar />
            <div className="w-4/5 p-4">
                {/* User-specific content */}
                <div className="flex items-center justify-end mb-4">
                    <div className="rounded-full bg-orange-50 shadow-md flex items-center justify-center h-8 mr-2 px-3 inline-flex">
                        <span className="text-sm text-gray-900">Logged in as {user.displayName}</span>
                        <span className="h-2 w-2 bg-green-500 rounded-full ml-1"></span>
                    </div>
                </div>

                {/* Dashboard section */}
                <div className="mb-4 mt-4 ml-4">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex flex-col mt-2">
                        <div className="bg-white rounded-lg shadow-md px-6 py-4 mb-4">
                            <div className="flex items-center mb-2">
                                <div className="bg-slate-100 rounded-full px-3 py-1 shadow-md">
                                    <span className="text-gray-900">Currently running:</span>
                                </div>
                            </div>
                            {/* Content for "Currently running" pill box */}
                        </div>
                        {/* Rest of the content */}
                    </div>
                </div>

                {/* Rest of the content */}
            </div>
        </div>
    );
};

export default UserPage;
