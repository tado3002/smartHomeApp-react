import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import ThermostatPage from "./pages/ThermostatPage";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thermostat" element={<ThermostatPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
