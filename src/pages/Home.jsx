import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { useChat } from "./useChat";

Chart.register(...registerables);

export const Home = () => {
  const { awards, chartData } = useChat();

  return (
    <div>
      {awards.length > 0 && (
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices",
              },
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      )}
    </div>
  );
};
