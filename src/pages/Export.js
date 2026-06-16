import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function Export() {

  const handleExport = () => {

    const medicines =
      JSON.parse(localStorage.getItem('medicines')) || [];

    let report =
      'PHARMASTOCK INVENTORY REPORT\n\n';

    medicines.forEach((medicine) => {

      report +=
        `ID: ${medicine.id}\n` +
        `Barcode: ${medicine.barcode}\n` +
        `Medicine: ${medicine.name}\n` +
        `Quantity: ${medicine.quantity}\n` +
        `Price: ${medicine.price}\n` +
        `Expiry Date: ${medicine.expiryDate}\n` +
        `--------------------------\n`;

    });

    const blob = new Blob(
      [report],
      { type: 'text/plain' }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement('a');

    link.href = url;

    link.download =
      'PharmaStock_Report.txt';

    link.click();

    window.URL.revokeObjectURL(url);

  };

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Export Inventory Report
          </h1>

          <div className="form-box">

            <p
              style={{
                marginBottom: '20px'
              }}
            >
              Download the complete inventory
              report containing medicine,
              barcode, quantity, price and
              expiry details.
            </p>

            <button
              onClick={handleExport}
            >
              Export Report
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Export;