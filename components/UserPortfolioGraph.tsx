import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the type for the portfolioData prop
interface PortfolioData {
  dates: string[]; // Array of time periods (e.g., months, years)
  goldValues: number[]; // Data points for gold values
  silverValues: number[]; // Data points for silver values
  totalValues: number[]; // Data points for total values
}

interface UserPortfolioGraphProps {
  portfolioData: PortfolioData;
}

const UserPortfolioGraph: React.FC<UserPortfolioGraphProps> = ({ portfolioData }) => {
  // Data for the graph
  const data = {
    labels: portfolioData.dates, // The x-axis labels (e.g., months or years)
    datasets: [
      {
        label: 'Gold Portfolio Value',
        data: portfolioData.goldValues, // Data points for gold
        borderColor: '#FFD700',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Silver Portfolio Value',
        data: portfolioData.silverValues, // Data points for silver
        borderColor: '#C0C0C0',
        backgroundColor: 'rgba(192, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      },
      {
        label: 'Total Portfolio Value',
        data: portfolioData.totalValues, // Total value combining gold and silver
        borderColor: '#4B9CD3',
        backgroundColor: 'rgba(75, 156, 211, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'User Portfolio Value Over Time',
        font: {
          size: 16,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Period',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Value (BDT)',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-neutral-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-neutral-700 mb-4">Portfolio Value Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserPortfolioGraph;
