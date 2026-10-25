'use client';

import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const data = [
    {
        name: "Mon",
        present: 60,
        absent: 40,
    },
    {
        name: "Tue",
        present: 70,
        absent: 30,
    },
    {
        name: "Wed",
        present: 40,
        absent: 60,
    },
    {
        name: "Thu",
        present: 80,
        absent: 20,
    },
    {
        name: "Fri",
        present: 70,
        absent: 30,
    },
]
const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center pb-2">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <BarChart
                style={{ width: '100%', maxWidth: '680px',height: '100%', maxHeight: '70vh', aspectRatio: 1.618, padding:"12px" }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
                <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
                <YAxis width="auto" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
                <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
                <Legend
                    layout="horizontal"
                    position="top"
                    wrapperStyle={{ left: 0, top:0,  transform: "none"}}
                />
                <Bar legendType="circle" dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
                <Bar legendType="circle" dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
            </BarChart>
        </div>
    )
}

export default AttendanceChart;