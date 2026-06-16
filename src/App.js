import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StockList from './pages/StockList';
import ExpiryAlert from './pages/ExpiryAlert';
import ReorderForm from './pages/ReorderForm';
import SupplierOrders from './pages/SupplierOrders';
import DispenseLog from './pages/DispenseLog';
import ChartAnalytics from './pages/ChartAnalytics';
import Notifications from './pages/Notifications';
import BarcodeLookup from './pages/BarcodeLookup';
import Export from './pages/Export';
import AdminPanel from './pages/AdminPanel';

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Authentication */}

        <Route
          path="/"
          element={<Signup />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Main Modules */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/stock"
          element={<StockList />}
        />

        <Route
          path="/expiry"
          element={<ExpiryAlert />}
        />

        <Route
          path="/reorder"
          element={<ReorderForm />}
        />

        <Route
          path="/supplier"
          element={<SupplierOrders />}
        />

        <Route
          path="/dispense"
          element={<DispenseLog />}
        />

        <Route
          path="/analytics"
          element={<ChartAnalytics />}
        />

        <Route
          path="/notifications"
          element={<Notifications />}
        />

        {/* Additional Modules */}

        <Route
          path="/barcode"
          element={<BarcodeLookup />}
        />

        <Route
          path="/export"
          element={<Export />}
        />

        <Route
          path="/admin"
          element={<AdminPanel />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;