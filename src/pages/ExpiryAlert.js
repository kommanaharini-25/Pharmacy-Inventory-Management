import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function ExpiryAlert() {

  const medicines =
    JSON.parse(localStorage.getItem('medicines')) || [];

  const today = new Date();

  const expiryMedicines = medicines
    .filter((medicine) => {

      if (!medicine.expiryDate) return false;

      const expiryDate =
        new Date(medicine.expiryDate);

      const daysLeft =
        Math.ceil(
          (expiryDate - today) /
          (1000 * 60 * 60 * 24)
        );

      return daysLeft <= 30;

    })

    .map((medicine) => {

      const expiryDate =
        new Date(medicine.expiryDate);

      const daysLeft =
        Math.ceil(
          (expiryDate - today) /
          (1000 * 60 * 60 * 24)
        );

      return {

        ...medicine,

        status:
          daysLeft <= 10
            ? 'Urgent'
            : 'Expiring Soon'

      };

    });

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Expiry Alerts
          </h1>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Medicine</th>

                <th>Barcode</th>

                <th>Expiry Date</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {expiryMedicines.length > 0 ? (

                expiryMedicines.map((medicine) => (

                  <tr key={medicine.id}>

                    <td>{medicine.id}</td>

                    <td>{medicine.name}</td>

                    <td>{medicine.barcode}</td>

                    <td>{medicine.expiryDate}</td>

                    <td>{medicine.status}</td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td colSpan="5">
                    No Expiry Alerts
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default ExpiryAlert;