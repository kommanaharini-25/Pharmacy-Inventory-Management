import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function SupplierOrders() {

  const defaultOrders = [

    {
      id: 1,
      supplier: 'Apollo Pharma',
      medicine: 'Crocin',
      quantity: 50,
      status: 'Delivered'
    },

    {
      id: 2,
      supplier: 'MedPlus',
      medicine: 'Dolo 650',
      quantity: 100,
      status: 'Pending'
    },

    {
      id: 3,
      supplier: 'HealthCare Distributors',
      medicine: 'Paracetamol',
      quantity: 75,
      status: 'Delivered'
    },

    {
      id: 4,
      supplier: 'MedLife Pharma',
      medicine: 'Azithromycin',
      quantity: 40,
      status: 'Pending'
    },

    {
      id: 5,
      supplier: 'WellCare Pharma',
      medicine: 'Amoxicillin',
      quantity: 60,
      status: 'Delivered'
    },

    {
      id: 6,
      supplier: 'PharmaHub',
      medicine: 'Cetirizine',
      quantity: 45,
      status: 'Pending'
    },

    {
      id: 7,
      supplier: 'CureMed Supplies',
      medicine: 'Omeprazole',
      quantity: 35,
      status: 'Delivered'
    },

    {
      id: 8,
      supplier: 'LifeLine Pharma',
      medicine: 'Metformin',
      quantity: 90,
      status: 'Pending'
    },

    {
      id: 9,
      supplier: 'Prime Healthcare',
      medicine: 'Ibuprofen',
      quantity: 55,
      status: 'Delivered'
    },

    {
      id: 10,
      supplier: 'MedStore Distributors',
      medicine: 'Vitamin C',
      quantity: 120,
      status: 'Pending'
    }

  ];

  const storedOrders =
    JSON.parse(localStorage.getItem('orders'));

  const orders =
    storedOrders && storedOrders.length > 0
      ? storedOrders
      : defaultOrders;

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Supplier Orders
          </h1>

          <table>

            <thead>

              <tr>

                <th>Order ID</th>

                <th>Supplier</th>

                <th>Medicine</th>

                <th>Quantity</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>{order.supplier}</td>

                  <td>{order.medicine}</td>

                  <td>{order.quantity}</td>

                  <td>{order.status}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default SupplierOrders;