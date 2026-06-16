import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Dashboard() {

  const medicines =
    JSON.parse(localStorage.getItem('medicines')) || [];

  const orders =
    JSON.parse(localStorage.getItem('orders')) || [];

  const lowStockItems = medicines.filter(
    (medicine) => Number(medicine.quantity) < 20
  );

  const today = new Date();

  const expiryItems = medicines.filter((medicine) => {

    if (!medicine.expiryDate) return false;

    const expiryDate = new Date(medicine.expiryDate);

    const difference =
      (expiryDate - today) / (1000 * 60 * 60 * 24);

    return difference <= 30;

  });

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Welcome Back 👋
          </h1>

          {/* KPI CARDS */}

          <div className="card-container">

            <div className="dashboard-card">
              <h2>{medicines.length}</h2>
              <p>Total Medicines</p>
            </div>

            <div className="dashboard-card">
              <h2>{lowStockItems.length}</h2>
              <p>Low Stock Items</p>
            </div>

            <div className="dashboard-card">
              <h2>{expiryItems.length}</h2>
              <p>Expiring Medicines</p>
            </div>

            <div className="dashboard-card">
              <h2>{orders.length}</h2>
              <p>Supplier Orders</p>
            </div>

          </div>

          <br />

          {/* LOW STOCK TABLE */}

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}
          >

            <h2>🚨 Low Stock Medicines</h2>

            <br />

            <table>

              <thead>

                <tr>
                  <th>Medicine</th>
                  <th>Quantity</th>
                </tr>

              </thead>

              <tbody>

                {lowStockItems.length > 0 ? (

                  lowStockItems.map((medicine) => (

                    <tr key={medicine.id}>

                      <td>{medicine.name}</td>

                      <td>{medicine.quantity}</td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="2">
                      No Low Stock Medicines
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

          {/* RECENT STOCK */}

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '10px'
            }}
          >

            <h2>📦 Current Inventory</h2>

            <br />

            <table>

              <thead>

                <tr>
                  <th>Medicine</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>

              </thead>

              <tbody>

                {medicines.length > 0 ? (

                  medicines.slice(0, 5).map((medicine) => (

                    <tr key={medicine.id}>

                      <td>{medicine.name}</td>

                      <td>{medicine.quantity}</td>

                      <td>{medicine.price}</td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td colSpan="3">
                      No Medicines Available
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;