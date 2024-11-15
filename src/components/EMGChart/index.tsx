import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { colors } from '../../theme/colors';
import { io } from 'socket.io-client';

const EMGChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const socket = io(':3001');

    socket.on('connect', () => {
      console.log(`Connected to server: ${socket.id}`);
    });

    socket.on('serial:data', (newData: string) => {
      setData((prevData) => {
        const updatedData = [
          ...prevData,
          { value: parseFloat(newData), timestamp: Date.now() },
        ];

        // Keep only the last N data points to avoid excessive memory usage
        return updatedData.slice(-100);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Line
          type="monotone"
          dataKey="value"
          stroke={colors.blue}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EMGChart;
