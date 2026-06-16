import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function AdminPanel() {

  const medicines =
    JSON.parse(localStorage.getItem('medicines')) || [];

  const orders =
    JSON.parse(localStorage.getItem('orders')) || [];

  const lowStockCount = medicines.filter(
    (medicine) => Number(medicine.quantity) < 20
  ).length;

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Admin Panel
          </h1>

          <div className="card-container">

            <div className="dashboard-card">
              <h2>{medicines.length}</h2>
              <p>Total Medicines</p>
            </div>

            <div className="dashboard-card">
              <h2>{orders.length}</h2>
              <p>Total Orders</p>
            </div>

            <div className="dashboard-card">
              <h2>{lowStockCount}</h2>
              <p>Low Stock Items</p>
            </div>

            <div className="dashboard-card">
              <h2>Online</h2>
              <p>System Status</p>
            </div>

          </div>

          <br />

          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '15px'
            }}
          >

            <h2>System Overview</h2>

            <br />

            <p>
              ✔ Pharmacy Inventory System Running Successfully
            </p>

            <br />

            <p>
              ✔ Inventory Monitoring Active
            </p>

            <br />

            <p>
              ✔ Expiry Tracking Active
            </p>

            <br />

            <p>
              ✔ Supplier Management Active
            </p>

            <br />

            <p>
              ✔ Barcode Lookup Active
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminPanel;