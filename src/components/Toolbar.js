import React from 'react';

const Toolbar = () => {
    return (
        <div className="bg-slate-950 text-white w-1/5 h-screen">
            <div className="p-4">
                <h1 className="text-xl font-bold">JOI.AI</h1>
                <div className="mt-6">
                    <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                        <span className="h-4 w-4 mr-2 rounded-full bg-red-500"></span>
                        Dashboard
                    </button>
                    <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                        <span className="h-4 w-4 mr-2 rounded-full bg-green-500"></span>
                        Manage Joi
                    </button>
                    <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                        <span className="h-4 w-4 mr-2 rounded-full bg-blue-500"></span>
                        Payment
                    </button>
                    <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                        <span className="h-4 w-4 mr-2 rounded-full bg-yellow-500"></span>
                        Settings
                    </button>
                    <button className="flex items-center justify-start w-full py-2 px-4 rounded-md text-left text-white hover:bg-gray-700 focus:outline-none">
                        <span className="h-4 w-4 mr-2 rounded-full bg-indigo-500"></span>
                        Help
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Toolbar;
