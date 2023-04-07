import React from 'react'
import "./BarChart.css"
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


function BarChart() {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],


        scales: {
            xAxes: [{
                gridLines: {
                    display:false
                }
            }],
            yAxes: [{
                gridLines: {
                    display:false
                }   
            }]
        },
        datasets: [
            {
                label: "Offline",
                data: [12, 19, 3, 5, 7, 13],
                backgroundColor: [
                    "#316FFF",
                ],
            },
            {
                label: "Online",
                data: [18, 11, 7, 9, 2, 9],
                backgroundColor: [
                    "#6694FF",
                ],
            },
        ],
    };

    return (
        <div className='barChart'>
            <Bar
                data={data}
            />
        </div>
    )
}

export default BarChart
