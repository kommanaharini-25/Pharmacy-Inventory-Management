import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate('/login');

  };

  return (

    <div className="sidebar">

      <h2 className="logo">
        💊 PharmaStock
      </h2>

      <ul>

        <li>
          <Link to="/dashboard">
            🏠 Dashboard
          </Link>
        </li>

        <li>
          <Link to="/stock">
            📋 Stock List
          </Link>
        </li>

        <li>
          <Link to="/expiry">
            ⚠ Expiry Alert
          </Link>
        </li>

        <li>
          <Link to="/barcode">
            🔍 Barcode Lookup
          </Link>
        </li>

        <li>
          <Link to="/reorder">
            🔄 Reorder Form
          </Link>
        </li>

        <li>
          <Link to="/supplier">
            🚚 Supplier Orders
          </Link>
        </li>

        <li>
          <Link to="/dispense">
            🧾 Dispense Log
          </Link>
        </li>

        <li>
          <Link to="/analytics">
            📊 Chart Analytics
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            🔔 Notifications
          </Link>
        </li>

        <li>
          <Link to="/admin">
            👨‍💼 Admin Panel
          </Link>
        </li>

        <li>
          <Link to="/export">
            📁 Export Report
          </Link>
        </li>

        <li>
          <button
            className="sidebar-logout"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </li>

      </ul>

    </div>

  );

}

export default Sidebar;