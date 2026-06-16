import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';

function ChartAnalytics() {

  const medicines =
    JSON.parse(localStorage.getItem('medicines')) || [];

  const stockData = medicines.map((medicine) => ({
    name: medicine.name,
    stock: Number(medicine.quantity)
  }));

  const lowStockCount = medicines.filter(
    (medicine) => Number(medicine.quantity) < 20
  ).length;

  const availableCount =
    medicines.length - lowStockCount;

  const pieData = [
    {
      name: 'Available',
      value: availableCount
    },
    {
      name: 'Low Stock',
      value: lowStockCount
    }
  ];

  const COLORS = [
    '#00C49F',
    '#FFBB28'
  ];

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Pharmacy Analytics Dashboard
          </h1>

          {/* KPI CARDS */}

          <div className="card-container">

            <div className="dashboard-card">
              <h2>{medicines.length}</h2>
              <p>Total Medicines</p>
            </div>

            <div className="dashboard-card">
              <h2>{lowStockCount}</h2>
              <p>Low Stock Items</p>
            </div>

            <div className="dashboard-card">
              <h2>{availableCount}</h2>
              <p>Available Medicines</p>
            </div>

            <div className="dashboard-card">
              <h2>Active</h2>
              <p>Inventory Status</p>
            </div>

          </div>

          <br />

          {/* BAR CHART */}

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              marginBottom: '30px'
            }}
          >

            <h2 style={{ marginBottom: '20px' }}>
              Medicine Stock Levels
            </h2>

            <ResponsiveContainer
              width="100%"
              height={350}
            >

              <BarChart data={stockData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="stock"
                  fill="#0b132b"
                  isAnimationActive={false}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

          {/* PIE CHART */}

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          >

            <h2 style={{ marginBottom: '20px' }}>
              Inventory Status
            </h2>

            <ResponsiveContainer
              width="100%"
              height={350}
            >

              <PieChart>

                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  dataKey="value"
                  label
                  isAnimationActive={false}
                >

                  {pieData.map((entry, index) => (

                    <Cell
                      key={index}
                      fill={COLORS[index]}
                    />

                  ))}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ChartAnalytics;