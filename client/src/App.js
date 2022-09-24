import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Budgets from "./pages/Budgets";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {
  return (
    //TODO: Add context to store user data
    <Router>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}
