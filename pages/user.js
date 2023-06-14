import React, { useContext } from 'react';
import { AuthContext } from '../src/AuthContext';
import Toolbar from './Toolbar';
import Dashboard from './Dashboard';
import M12 from './manageJoi';
import AnimateRoute from './AnimateRoute';
import {
    BrowserRouter as Router, Route, Routes, useParams,
    useRouteMatch
} from 'react-router-dom';


const UserPage = () => {
    console.log(Routes)
    const user = useContext(AuthContext);

    if (!user) {
        // Not signed in. You can redirect to the sign-in page here.
        return null;
    }

    return (
        <Router>
            <div className="flex bg-zinc-200">
                <img
                    src="https://img.freepik.com/free-photo/pink-yellow-plain-background_53876-98329.jpg?w=2000&t=st=1686723444~exp=1686724044~hmac=73251b93da729ddc3c35c0b12076468925174e1389b588626cb43a70fab86ed3"
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
                        <AnimateRoute>
                            <Routes>
                                <Route path="/user" element={<Dashboard />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/manage-joi" element={<M12 />} />
                                {/* Add more routes as needed */}
                            </Routes>
                        </AnimateRoute>

                    </div>
                    {/* Rest of the content */}
                </div>
            </div>
        </Router>
    );
};

export default UserPage;
