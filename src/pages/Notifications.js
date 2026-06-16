import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Notifications() {

  const medicines =
    JSON.parse(localStorage.getItem('medicines')) || [];

  const today = new Date();

  const lowStockMedicines = medicines.filter(
    (medicine) => Number(medicine.quantity) < 20
  );

  const expiringMedicines = medicines.filter(
    (medicine) => {

      if (!medicine.expiryDate) return false;

      const expiryDate =
        new Date(medicine.expiryDate);

      const daysLeft =
        (expiryDate - today) /
        (1000 * 60 * 60 * 24);

      return daysLeft <= 30;

    }
  );

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Notifications
          </h1>

          {/* LOW STOCK ALERTS */}

          {lowStockMedicines.map((medicine) => (

            <div
              key={`stock-${medicine.id}`}
              className="notification-box"
            >
              ⚠ Low Stock Alert:
              {' '}
              {medicine.name}
              {' '}
              has only
              {' '}
              {medicine.quantity}
              {' '}
              units remaining.
            </div>

          ))}

          {/* EXPIRY ALERTS */}

          {expiringMedicines.map((medicine) => (

            <div
              key={`expiry-${medicine.id}`}
              className="notification-box"
            >
              ⏰ Expiry Alert:
              {' '}
              {medicine.name}
              {' '}
              expires on
              {' '}
              {medicine.expiryDate}
            </div>

          ))}

          {/* NO NOTIFICATIONS */}

          {lowStockMedicines.length === 0 &&
           expiringMedicines.length === 0 && (

            <div
              className="notification-box"
            >
              ✅ No Notifications Available
            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default Notifications;