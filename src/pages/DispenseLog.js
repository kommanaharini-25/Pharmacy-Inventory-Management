import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function DispenseLog() {

  const logs =
    JSON.parse(localStorage.getItem('dispenseLogs')) || [

      {
        id: 1,
        medicine: 'Paracetamol',
        quantity: 2,
        date: '28-05-2026'
      },

      {
        id: 2,
        medicine: 'Crocin',
        quantity: 1,
        date: '27-05-2026'
      },

      {
        id: 3,
        medicine: 'Dolo 650',
        quantity: 3,
        date: '26-05-2026'
      },

      {
        id: 4,
        medicine: 'Azithromycin',
        quantity: 2,
        date: '25-05-2026'
      },

      {
        id: 5,
        medicine: 'Cetirizine',
        quantity: 4,
        date: '24-05-2026'
      },

      {
        id: 6,
        medicine: 'Omeprazole',
        quantity: 2,
        date: '23-05-2026'
      },

      {
        id: 7,
        medicine: 'Vitamin C',
        quantity: 5,
        date: '22-05-2026'
      }

    ];

  return (

    <div className="app-layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard">

          <h1 className="page-title">
            Dispense Log
          </h1>

          <table>

            <thead>

              <tr>

                <th>ID</th>

                <th>Medicine</th>

                <th>Quantity</th>

                <th>Date</th>

              </tr>

            </thead>

            <tbody>

              {logs.map((log) => (

                <tr key={log.id}>

                  <td>{log.id}</td>

                  <td>{log.medicine}</td>

                  <td>{log.quantity}</td>

                  <td>{log.date}</td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}

export default DispenseLog;