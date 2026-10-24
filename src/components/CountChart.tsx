'use client';

import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import { RechartsDevtools } from '@recharts/devtools';
import Image from 'next/image';

// #region Sample data
const data = [
    { name: 'total', uv: 99, fill:'white' },
    { name: 'Boys', uv: 54, fill:'#C3EBFA' },
    { name: 'Girls', uv: 45,fill:'#FAE27C' },
];

const CountChart = () => {
    return (
        <div className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image className='cursor-pointer' src="/moredark.png" alt='' width={20} height={20}/>
            </div>
            {/* CHART */}
            <div className='w-full h-[75%] relative'>
                <RadialBarChart
                    style={{ aspectRatio:0.700 }}
                    responsive
                    cx="50%"
                    cy="50%"
                    innerRadius="40%"
                    outerRadius="100%"
                    barSize={32}
                    data={data}
                >
                    <RadialBar background dataKey="uv" />
                </RadialBarChart>
                <Image src="/maleFemale.png" alt='' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
            </div>
            {/* BOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaSky rounded-full'/>
                    <h1 className='font-bold'>1,234</h1>
                    <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                    
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-lamaYellow rounded-full'/>
                    <h1 className='font-bold'>1,000</h1>
                    <h2 className='text-xs text-gray-300'>Girls (45%)</h2>  
                </div>
            </div>
        </div>
    )
}

export default CountChart;