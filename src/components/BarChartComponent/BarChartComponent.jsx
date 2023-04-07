import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import Months from '../Months/Months';

function BarChartComponent() {
    const data = [
        {
            name: 'Jan',
            online: 4000,
            offline: 2400,
            amt: 2400,
        },
        {
            name: 'Feb',
            online: 3000,
            offline: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            online: 2000,
            offline: 2800,
            amt: 2290,
        },
        {
            name: 'Apr',
            online: 2780,
            offline: 3908,
            amt: 2000,
        },
        {
            name: 'May',
            online: 1890,
            offline: 4800,
            amt: 2181,
        },
        {
            name: 'Jun',
            online: 2390,
            offline: 3800,
            amt: 2500,
        },
        {
            name: 'Jul',
            online: 3490,
            offline: 4300,
            amt: 2100,
        },
    ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <Legend layout='horizontal' verticalAlign='top' align='end' />
                <YAxis />
                <XAxis dataKey="name"/>
                <Tooltip />
                <Bar dataKey="online" fill="#6895FF" />
                <Bar dataKey="offline" fill="#316FFF" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChartComponent
