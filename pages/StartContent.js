import React, { useEffect, useRef } from 'react';
import { useState } from 'react';



const StartContent = () => {
    const currentInstance = {}; // Replace {} with your actual object

    if (!Object.keys(currentInstance).length) {
        return (
            <div
                className="w-3/5 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 hover:scale-105 transition-transform duration-300"
                id="start"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {/* No models found */}
                <div
                    className="border-dotted border-2 border-gray-500 rounded-xl"
                    style={{ width: '95%', height: '85%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
                >
                    <p className="text-center text-gray-500">No models found</p>
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-xl mt-4">
                        Create model
                    </button>
                </div>

            </div>
        );
    }

    // Render content when currentInstance exists
    return (
        <div
            className="w-3/5 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 hover:scale-105 transition-transform duration-300"
            id="start"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            {/* Start Content */}
            <div
                className="border-dotted border-2 border-gray-500 rounded-xl"
                style={{ width: '95%', height: '85%' }}
            ></div>
        </div>
    );
};

export default StartContent;