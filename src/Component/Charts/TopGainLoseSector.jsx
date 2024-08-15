import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ReferenceLine,
    ResponsiveContainer,
    LabelList,
} from 'recharts';

const data = [
    { name: 'Engineering', value: 3.7 },
    { name: 'Cement', value: 1.0 },
    { name: 'Life Insurance', value: 0.4 },
    { name: 'Textile', value: 0.4 },
    { name: 'IT', value: -0.4 },
    { name: 'Ceramics', value: -0.5 },
    { name: 'Paper', value: -0.5 },
    { name: 'Mutual Funds', value: -1.1 },
    { name: 'Travel & Leisure', value: -1.5 },
    { name: 'Jute', value: -1.9 },
];

// Custom function to render labels at specific positions
const CustomLabel = ({ x, y, value }) => {
    const isPositive = value >= 0;
    const labelYPosition = isPositive ?  160 : 130; // Adjust label position based on the value

    return (
        <text
            x={x}
            y={labelYPosition}
            fill="#2B2F88"
            fontSize="16px"
            // textAnchor="middle"
            fontWeight="500"
        >
            {`${value}%`} {/* Corrected template literal syntax */}  
        </text>
    );
};
// abc 
const TopGainLoseSector = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 60,
                        bottom: 50, // Increased bottom margin for extra space
                    }}
                >
                    <XAxis
                        dataKey="name"
                        tick={{ angle: -45, textAnchor: 'end', fontSize: '14px' }}
                        interval={0} // Ensure all ticks are displayed
                    />
                    <YAxis
                        hide
                        domain={[-2.5, 4]} // Adjusted domain to create extra space
                    />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]}>
                        <LabelList
                            dataKey="value"
                            content={<CustomLabel />} // Use the custom label component
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TopGainLoseSector;
