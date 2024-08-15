import React from 'react';
// import { IoMdArrowDropupCircle } from "react-icons/io";
import { TbArrowBigUpFilled } from "react-icons/tb";



const MarketAtAGlance = () => {
    return (
        <>
            <div>
                <h1 className='text-2xl font-extrabold text-blue-900 py-10'>MARKET AT A GLANCE</h1>
            </div>

            <div className="grid grid-cols-11 gap-4 text-2xl font-semibold mytable">
                <div className="flex justify-center items-center col-span-3"></div>
                <div className="flex justify-center items-center col-span-2 text-sm">Today</div>
                <div className="flex justify-center items-center col-span-2 text-sm">Yesterday</div>
                <div className="flex justify-center items-center col-span-2 text-sm">Change</div>
                <div className="flex justify-center items-center"></div>
                <div className="flex justify-center items-center text-sm">Del%</div>

                <div className="flex pl-4 items-center border-2 border-gray-400 col-span-3 text-start">DSEX</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">5485</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">5483</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">2</div>
                <div className="flex justify-center items-center border-2 border-gray-400 border-none text-green-500 text-2xl"><TbArrowBigUpFilled /></div>
                <div className="flex justify-center items-center border-2 border-gray-400 ">0.0%</div>

                <div className="flex pl-4 items-center border-2 border-gray-400 col-span-3 text-start">Turnover (BDT mn)</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">6622</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">6223</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">400</div>
                <div className="flex justify-center items-center border-2 border-gray-400 border-none text-green-500 text-2xl"><TbArrowBigUpFilled /></div>
                <div className="flex justify-center items-center border-2 border-gray-400 ">6.4%</div>
                
                <div className="flex pl-4 items-center border-2 border-gray-400 col-span-3 text-start">Market Cap (BDT mn)</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">3670</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">3658</div>
                <div className="flex justify-center items-center border-2 border-gray-400 col-span-2">13</div>
                <div className="flex justify-center items-center border-2 border-gray-400 border-none text-green-500 text-2xl"><TbArrowBigUpFilled /></div>
                <div className="flex justify-center items-center border-2 border-gray-400 ">0.3%</div>

            </div>


            {/* <table className="w-full text-lg font-semibold mytable">
                <thead>
                    <tr className="flex justify-center items-center gap-20">
                        <th className="px-4 py-2">Market</th>
                        <th className="px-4 py-2">Today</th>
                        <th className="px-4 py-2">Yesterday</th>
                        <th className="px-4 py-2">Change</th>
                        <th className="px-4 py-2 "></th>
                        <th className="px-4 py-2">Del%</th>*
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex justify-center items-center gap-20">
                        <td className="px-4 py-2">DSEX</td>
                        <td className="px-4 py-2">5485</td>
                        <td className="px-4 py-2">5483</td>
                        <td className="px-4 py-2">2</td>
                        <td className="px-4 py-2 border-none text-green-500 text-2xl"><TbArrowBigUpFilled /></td>
                        <td className="px-4 py-2">0.0%</td>
                    </tr>
                </tbody>
            </table> */}




        </>

    );
};

export default MarketAtAGlance;