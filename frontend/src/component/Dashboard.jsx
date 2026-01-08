import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  // Sample data (you can replace with API data later)
  const stats = [
    { title: "Total Products", value: 120 },
    { title: "Orders", value: 56 },
    { title: "Revenue", value: "$8,450" },
    { title: "Users", value: 430 },
  ];

  // Chart Data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [1200, 1900, 3000, 2500, 4000, 3450],
        backgroundColor: "rgba(59, 130, 246, 0.7)", // blue
      },
    ],
  };

  const ordersData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Orders",
        data: [40, 10, 6],
        backgroundColor: [
          "rgba(34,197,94,0.7)", // green
          "rgba(234,179,8,0.7)", // yellow
          "rgba(239,68,68,0.7)", // red
        ],
      },
    ],
  };

  const usersData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users Growth",
        data: [100, 150, 200, 280, 350, 430],
        borderColor: "rgba(147,51,234,0.8)", // purple
        backgroundColor: "rgba(147,51,234,0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">📊 Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Revenue (Last 6 Months)</h2>
          <Bar data={revenueData} />
        </div>

        {/* Orders Pie Chart */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">Orders Status</h2>
          <Pie data={ordersData} />
        </div>

        {/* Users Growth Line Chart */}
        <div className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow col-span-1 md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Users Growth</h2>
          <Line data={usersData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
