import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import jsonData from "../src/data.js";
import { useState } from 'react';
import StartContent from "./StartContent"







const GraphContent = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Sample JSON data
        // Prepare the data for Chart.js
        const labels = Object.keys(jsonData);
        const data = Object.values(jsonData);

        const datasets = [{
            label: 'Current Personality Traits',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }];

        // Create the chart using Chart.js
        const ctx = chartRef.current.getContext('2d');
        let chart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                responsive: true,
            }
        });

        // Cleanup function to destroy the previous chart
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className="w-1/3 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 hover:scale-105 transition-transform duration-300" id="graph">
            <canvas ref={chartRef}></canvas>
        </div>
    );
};


const CurrentTierContent = () => {
    const [hovered, setHovered] = useState(false);
    const curr_tier = "Free"; // Replace with your actual data

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <div
            className={`w-1/4 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 transition-all duration-300 transform-gpu ${hovered
                ? 'hover:bg-zinc-950 hover:text-white hover:scale-105'
                : 'hover:bg-blue-500 hover:text-white'
                }`}
            id="currentTier"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <h2 className="text-xl text-center font-monospaced">
                {hovered ? 'Upgrade to Platinum' : 'Current Tier: ' + curr_tier}
            </h2>
        </div>
    );
};






const Dashboard = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex flex-row h-1/6 justify-around py-10">
                <div className="w-1/4 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 hover:scale-105 transition-transform duration-300" id="Getstarted"></div>
                <div className="w-1/4 bg-zinc-50 rounded-xl shadow-lg p-4 z-10 hover:scale-105 transition-transform duration-300"></div>
                <CurrentTierContent /> {/* Include the CurrentTierContent component here */}
            </div>
            <div className="flex flex-row h-2/4 py-5 justify-around">
                <StartContent />
                <GraphContent />
            </div>
        </div>
    );
};


export default Dashboard;
