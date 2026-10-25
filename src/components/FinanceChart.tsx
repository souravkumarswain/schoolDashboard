"use client"
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, createHorizontalChart } from 'recharts';
import Image from "next/image";

type FinanceData = {
  name: string;
  income: number;
  expense: number;
};

const data = [
    {
       name:"Jan",
       income:3490,
       expense:4300, 
    },
     {
       name:"Feb",
       income:3390,
       expense:5300, 
    },
     {
       name:"Mar",
       income:5490,
       expense:4300, 
    },
     {
       name:"Apr",
       income:6490,
       expense:4200, 
    },
     {
       name:"May",
       income:7290,
       expense:6400, 
    },
     {
       name:"Jun",
       income:5490,
       expense:4300, 
    },
     {
       name:"Jul",
       income:6590,
       expense:5300, 
    },
     {
       name:"Aug",
       income:4690,
       expense:2300, 
    },
     {
       name:"Sep",
       income:5690,
       expense:4100, 
    },
     {
       name:"Oct",
       income:7690,
       expense:2300, 
    },
     {
       name:"Nov",
       income:6690,
       expense:3400, 
    },
     {
       name:"Dec",
       income:4490,
       expense:2300, 
    },
]

const FinanceChart = () => {
  const Typed = createHorizontalChart<FinanceData, string, number>()({ XAxis, YAxis, Tooltip, Line });
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className="flex justify-between items-center pb-2">
                <h1 className="text-lg font-semibold">Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20} />
            </div>
            <Typed.LineChart
                style={{ width: '100%', maxWidth: '700px', height: '90%', maxHeight: '70vh', aspectRatio: 0.700, padding:"15px" }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <Typed.XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <Typed.YAxis width="auto"  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
                <Tooltip />
                <Legend
                    layout="horizontal"
                    position="top"
                />
                <Typed.Line type="monotone" dataKey="income"  stroke="#FAE27C" strokeWidth={3}/>
                <Typed.Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={3}/>
            </Typed.LineChart>
        </div>
    )
}

export default FinanceChart;