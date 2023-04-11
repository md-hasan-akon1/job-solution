import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';

const data = [
    { id: 1, results: "57", assignmentNo: 'assignment 1' },
    { id: 2, results: "60", assignmentNo: 'assignment 2' },
    { id: 3, results: "60", assignmentNo: 'assignment 3' },
    { id: 4, results: "60", assignmentNo: 'assignment 4'},
    { id: 5, results: "56", assignmentNo: 'assignment 5' },
    { id: 6, results: "60", assignmentNo: 'assignment 6' },
    { id: 7, results: "60", assignmentNo: 'assignment 7' }
]
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00C49F', '#FFBB28', '#FF8042'];
const Statistics = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-center mt-32'>AreaChart</h1>
            <AreaChart className='mx-auto' width={900}
                height={400}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                > <XAxis dataKey="assignmentNo" />
                <YAxis dataKey="results" />
                <Tooltip />
                <Area  dataKey="results" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
               </AreaChart>
        </div>
    );
};

export default Statistics;