import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function BarcodeLookup() {

  const [barcode, setBarcode] = useState('');
  const [medicine, setMedicine] = useState(null);

  const handleSearch = () => {

    const medicines =
      JSON.parse(localStorage.getItem('medicines')) || [];

    const foundMedicine = medicines.find(
      (item) => item.barcode === barcode
    );

    if (foundMedicine) {

      setMedicine(foundMedicine);

    } else {

      alert('Medicine Not Found');

      setMedicine(null);

    }

  };

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Barcode Lookup
          </h1>

          <div className="form-box">

            <input
              type="text"
              placeholder="Enter Barcode"
              value={barcode}
              onChange={(e) =>
                setBarcode(e.target.value)
              }
            />

            <button onClick={handleSearch}>
              Search
            </button>

          </div>

          <br />

          {medicine && (

            <div
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '15px'
              }}
            >

              <h2>Medicine Details</h2>

              <br />

              <p>
                <strong>Barcode:</strong>{' '}
                {medicine.barcode}
              </p>

              <br />

              <p>
                <strong>Medicine Name:</strong>{' '}
                {medicine.name}
              </p>

              <br />

              <p>
                <strong>Quantity:</strong>{' '}
                {medicine.quantity}
              </p>

              <br />

              <p>
                <strong>Price:</strong>{' '}
                {medicine.price}
              </p>

              <br />

              <p>
                <strong>Expiry Date:</strong>{' '}
                {medicine.expiryDate}
              </p>

            </div>

          )}

        </div>

      </div>

    </div>

  );

}

export default BarcodeLookup;