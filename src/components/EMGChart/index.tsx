import React, { Fragment, useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { colors } from '../../theme/colors';
import { io } from 'socket.io-client';
import * as S from './styles';
import { useDataContext } from '../DataContext';

const EMGChart = () => {
  const { addEmgDataPoint, emgData, wordEvents } = useDataContext();
  const [chartData, setChartData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);

  useEffect(() => {
    const socket = io(':3001');

    socket.on('connect', () => {
      console.log(`Connected to server: ${socket.id}`);
    });

    socket.on('serial:data', (newData: string) => {
      const numericValue = parseFloat(newData);
      const newTimestamp = Date.now();

      setChartData((prevData) => {
        const updatedData = [
          ...prevData,
          { value: numericValue, timestamp: newTimestamp },
        ];

        // Keep only the last N data points to avoid excessive memory usage
        return updatedData.slice(-100);
      });

      addEmgDataPoint({ value: numericValue, timestamp: newTimestamp });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const values = chartData.map((d) => d.value);
    const max = Math.max(...values, 0);
    setMaxValue((prev) => (max > prev ? max : prev));
  }, [chartData]);

  const handleDownloadData = () => {
    // Prepare a JSON (or CSV) file with EMG + wordEvents
    const dataToExport = {
      emgData,
      wordEvents,
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a temporary <a> link to trigger the download
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'emg_data.json'); // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Fragment>
      <S.MaxValue>Valor máximo atingido: {maxValue}</S.MaxValue>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={chartData}>
          <XAxis dataKey="timestamp" />
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
      <button onClick={handleDownloadData}>Download Data</button>
    </Fragment>
  );
};

export default EMGChart;
