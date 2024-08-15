import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

const TopTurnOver = () => {
    const dataset = [
        { sector: 'Pharma', value: 24.1 },
        { sector: 'Food & Allied', value: 10.1 },
        { sector: 'Textile', value: 8.6 },
        { sector: 'Engineering', value: 8.4 },
        { sector: 'Bank', value: 6.4 },
    ];

    return (
        <div>


            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={dataset}
                    layout="vertical"
                    margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
                >
                    <XAxis
                        type="number"
                        domain={[0, 30]}
                        axisLine={false}
                        tickLine={false}
                        tick={false}
                    />
                    <YAxis dataKey="sector" type="category" />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Bar dataKey="value" fill="#8884d8">
                        <LabelList
                            dataKey="value"
                            position="insideRight"
                            formatter={(value) => `${value}%`}
                            fill="#ffffff"
                        />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>

        </div>
    );
};

export default TopTurnOver;
