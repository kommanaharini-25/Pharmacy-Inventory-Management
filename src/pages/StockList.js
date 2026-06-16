import { useState, useEffect } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function StockList() {

  const defaultMedicines = [

    {
      id: 1,
      barcode: '1001',
      name: 'Paracetamol',
      quantity: 50,
      price: '₹100',
      expiryDate: '2026-06-15'
    },

    {
      id: 2,
      barcode: '1002',
      name: 'Crocin',
      quantity: 15,
      price: '₹80',
      expiryDate: '2026-06-08'
    },

    {
      id: 3,
      barcode: '1003',
      name: 'Dolo 650',
      quantity: 75,
      price: '₹120',
      expiryDate: '2026-07-10'
    },

    {
      id: 4,
      barcode: '1004',
      name: 'Azithromycin',
      quantity: 30,
      price: '₹250',
      expiryDate: '2026-06-20'
    },

    {
      id: 5,
      barcode: '1005',
      name: 'Amoxicillin',
      quantity: 45,
      price: '₹180',
      expiryDate: '2026-08-05'
    },

    {
      id: 6,
      barcode: '1006',
      name: 'Cetirizine',
      quantity: 60,
      price: '₹90',
      expiryDate: '2026-06-25'
    },

    {
      id: 7,
      barcode: '1007',
      name: 'Omeprazole',
      quantity: 10,
      price: '₹140',
      expiryDate: '2026-06-12'
    },

    {
      id: 8,
      barcode: '1008',
      name: 'Metformin',
      quantity: 55,
      price: '₹200',
      expiryDate: '2026-09-01'
    },

    {
      id: 9,
      barcode: '1009',
      name: 'Ibuprofen',
      quantity: 18,
      price: '₹110',
      expiryDate: '2026-06-18'
    },

    {
      id: 10,
      barcode: '1010',
      name: 'Vitamin C',
      quantity: 100,
      price: '₹150',
      expiryDate: '2026-10-10'
    }

  ];

  const [medicines, setMedicines] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [newMedicine, setNewMedicine] = useState({

    barcode: '',
    name: '',
    quantity: '',
    price: '',
    expiryDate: ''

  });

  useEffect(() => {

    const storedMedicines =
      JSON.parse(localStorage.getItem('medicines'));

    if (storedMedicines) {

      setMedicines(storedMedicines);

    } else {

      localStorage.setItem(
        'medicines',
        JSON.stringify(defaultMedicines)
      );

      setMedicines(defaultMedicines);

    }

  }, []);

  const handleChange = (e) => {

    setNewMedicine({

      ...newMedicine,

      [e.target.name]: e.target.value

    });

  };

  const handleAddMedicine = () => {

    if (
      !newMedicine.barcode ||
      !newMedicine.name ||
      !newMedicine.quantity ||
      !newMedicine.price ||
      !newMedicine.expiryDate
    ) {

      alert('Please fill all fields');

      return;

    }

    const medicine = {

      id: medicines.length + 1,

      barcode: newMedicine.barcode,

      name: newMedicine.name,

      quantity: newMedicine.quantity,

      price: newMedicine.price,

      expiryDate: newMedicine.expiryDate

    };

    const updatedMedicines = [

      ...medicines,

      medicine

    ];

    setMedicines(updatedMedicines);

    localStorage.setItem(
      'medicines',
      JSON.stringify(updatedMedicines)
    );

    setNewMedicine({

      barcode: '',
      name: '',
      quantity: '',
      price: '',
      expiryDate: ''

    });

    setShowForm(false);

  };

  const handleDelete = (id) => {

    const updatedMedicines =
      medicines.filter(
        (medicine) => medicine.id !== id
      );

    setMedicines(updatedMedicines);

    localStorage.setItem(
      'medicines',
      JSON.stringify(updatedMedicines)
    );

  };

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <div className="top-section">

            <h1 className="page-title">
              Stock List
            </h1>

            <button
              className="add-btn"
              onClick={() => setShowForm(true)}
            >
              + Add Stock
            </button>

          </div>

          {showForm && (

            <div className="form-box">

              <input
                type="text"
                name="barcode"
                placeholder="Barcode Number"
                value={newMedicine.barcode}
                onChange={handleChange}
              />

              <input
                type="text"
                name="name"
                placeholder="Medicine Name"
                value={newMedicine.name}
                onChange={handleChange}
              />

              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={newMedicine.quantity}
                onChange={handleChange}
              />

              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newMedicine.price}
                onChange={handleChange}
              />

              <input
                type="date"
                name="expiryDate"
                value={newMedicine.expiryDate}
                onChange={handleChange}
              />

              <button onClick={handleAddMedicine}>
                Add Medicine
              </button>

            </div>

          )}

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Barcode</th>

                <th>Medicine</th>

                <th>Quantity</th>

                <th>Price</th>

                <th>Expiry Date</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {medicines.map((medicine) => (

                <tr key={medicine.id}>

                  <td>{medicine.id}</td>

                  <td>{medicine.barcode}</td>

                  <td>{medicine.name}</td>

                  <td>{medicine.quantity}</td>

                  <td>{medicine.price}</td>

                  <td>{medicine.expiryDate}</td>

                  <td>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(medicine.id)
                      }
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default StockList;