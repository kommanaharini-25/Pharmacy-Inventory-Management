import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function ReorderForm() {

  const [medicine, setMedicine] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleOrder = () => {

    if (!medicine || !quantity) {

      alert('Please fill all fields');

      return;

    }

    const existingOrders =
      JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {

      id: Date.now(),

      supplier: 'Pharma Supplier',

      medicine,

      quantity,

      status: 'Pending'

    };

    existingOrders.push(newOrder);

    localStorage.setItem(
      'orders',
      JSON.stringify(existingOrders)
    );

    alert('Order Placed Successfully');

    setMedicine('');
    setQuantity('');

  };

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Reorder Form
          </h1>

          <div className="form-box">

            <input
              type="text"
              placeholder="Medicine Name"
              value={medicine}
              onChange={(e) =>
                setMedicine(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
            />

            <button onClick={handleOrder}>
              Place Order
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default ReorderForm;