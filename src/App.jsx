import { useState } from 'react';
import './App.css';
import { TbArrowBigUpFilled } from "react-icons/tb";
// import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import TopTurnOver from './Component/Charts/TopTurnOver';
import TopGainLoseSector from './Component/Charts/TopGainLoseSector';

function App() {

  // Top Gainers 
  const gainer = [
    { name: "ISNLTD", value: 9.9 },
    { name: "ZEALBANGLA", value: 9.9 },
    { name: "TECHNODRUG", value: 9.8 },
    { name: "FEKDIL", value: 7.8 },
    { name: "WALTONHIL", value: 7.5 },
  ];
  const Loosers = [
    { name: "LINDEBD", value: 3.0 },
    { name: "SALVOCHEM", value: 3.0 },
    { name: "BEACHHATCH", value: 3.0 },
    { name: "OIMEX", value: 3.0 },
    { name: "KBPPWBIL", value: 2.9 },
  ];
  const Turnover = [
    { name: "ORIOINFU", value: 572 },
    { name: "SEAPEARL", value: 244 },
    { name: "LOVELLO", value: 182 },
    { name: "EBL", value: 173 },
    { name: "FEKDIL", value: 165 },
  ];
  const TurnoverMax = 572;


  // REACT CHART FUNCTION
  const data = [
    {
      name: 'Page A',
      uv: 400,
      pv: 240,
      amt: 240,
    },
    {
      name: 'Page B',
      uv: 300,
      pv: 139,
      amt: 221,
    },
    {
      name: 'Page C',
      uv: 200,
      pv: 980,
      amt: 229,
    },
    {
      name: 'Page D',
      uv: 278,
      pv: 390,
      amt: 200,
    },
    {
      name: 'Page E',
      uv: 189,
      pv: 480,
      amt: 218,
    },
    {
      name: 'Page F',
      uv: 239,
      pv: 380,
      amt: 250,
    },
    {
      name: 'Page G',
      uv: 349,
      pv: 430,
      amt: 210,
    },
  ];

  const [count, setCount] = useState(0);

  return (
    <>
      <div className='p-5 border border-black'>

        <div className='flex justify-between items-center'>
          <div className='w-1/4'>
            <h1 className='font-bold bg-[#2B2F88] w-1/2 text-slate-200 rounded-tr-md'>11/08/2024</h1>
            <h1 className='font-bold text-xl bg-[#2B2F88] text-slate-200 rounded-r-md'>Today's Market Highlights</h1>
          </div>
          <div className='w-1/4'>
            <img className='w-full' src="https://i.ibb.co/g6LdSbd/CBC-LOGO-Full.jpg" alt="" />
          </div>
        </div>

        <div>
          <div>
            <h1 className='text-4xl font-extrabold text-blue-900 py-10'>MARKET AT A GLANCE</h1>
          </div>

          <div className="grid grid-cols-11 gap-4 text-xl font-semibold mytable w-4/5 m-auto">
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
        </div>

        {/* 2nd Section */}
        <div className='grid grid-cols-3 gap-10 mt-10'>


          {/* Left Side */}
          <div className='col-span-2'>
            <div>
              <h1 className="text-xl font-bold text-slate-200 bg-[#2B2F88] py-3 px-5 m-auto rounded-md">
                TOP TURNOVER CONTRIBUTION
              </h1>

              <div className='w-full m-auto'>
                <TopTurnOver></TopTurnOver>
              </div>
            </div>


            <div className=''>
              <h1 className="text-xl font-bold text-slate-200 bg-[#2B2F88] py-3 px-5 m-auto rounded-md">
                TOP GAINING AND LOOSING SECTORS
              </h1>
              <div className='w-full m-auto'>
                <TopGainLoseSector></TopGainLoseSector>
              </div>

            </div>


          </div>




          {/* Right Side */}
          <div className=''>


            {/* TOP GAINERS */}
            <div>
              <h1 className="text-xl font-bold text-slate-200 bg-[#2B2F88] py-3 px-5 m-auto rounded-t-md">
                TOP GAINERS
              </h1>


              <div className='flex flex-col'>
                <span className='flex justify-between font-bold mb-1 bg-blue-400 px-2 rounded-b-md text-white'>
                  <span>Ticker</span>
                  <span>Return</span>
                </span>

                {gainer.map((item, index) => (
                  <span key={index} className="grid grid-cols-9 justify-between items-center font-semibold">
                    <span className="col-span-3 text-start">{item.name}</span>
                    <progress className="col-span-4 progress progress-secondary h-3 bg-white" value={item.value} max="10"></progress>
                    <span className="col-span-2 text-end">{item.value}%</span>
                  </span>
                ))}



              </div>

              {/* <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div> */}
            </div>



            {/* TOP Loosers */}
            <div className='mt-4'>
              <h1 className="text-xl font-bold text-slate-200 bg-[#2B2F88] py-3 px-5 m-auto rounded-t-md">
                TOP LOSERS
              </h1>


              <div className='flex flex-col'>
                <span className='flex justify-between font-bold mb-1 bg-blue-400 px-2 rounded-b-md text-white'>
                  <span>Ticker</span>
                  <span>Return</span>
                </span>

                {Loosers.map((item, index) => (
                  <span key={index} className="grid grid-cols-9 justify-between items-center font-semibold">
                    <span className="col-span-3 text-start">{item.name}</span>
                    <progress className="col-span-4 progress progress-secondary h-3 bg-white" value={item.value} max="10"></progress>
                    <span className="col-span-2 text-end">{item.value.toFixed(1)}%</span>
                  </span>
                ))}

              </div>


            </div>



            {/* TOP Turnover */}
            <div className='mt-4'>
              <h1 className="text-xl font-bold text-slate-200 bg-[#2B2F88] py-3 px-5 m-auto rounded-t-md">
                TOP TURNOVER
              </h1>


              <div className='flex flex-col'>
                <span className='flex justify-between font-bold mb-1 bg-blue-400 px-2 rounded-b-md text-white'>
                  <span>Ticker</span>
                  <span>Turnover(BDT mn)</span>
                </span>

                {Turnover.map((item, index) => (
                  <span key={index} className="grid grid-cols-9 justify-between items-center font-semibold">
                    <span className="col-span-3 text-start">{item.name}</span>
                    <progress className="col-span-4 progress progress-secondary h-3 bg-white" value={item.value} max={TurnoverMax}></progress>
                    <span className="col-span-2 text-end">{item.value.toFixed(1)}</span>
                  </span>
                ))}

              </div>


            </div>






          </div>

        </div>

      </div>

    </>
  )
}

export default App;
