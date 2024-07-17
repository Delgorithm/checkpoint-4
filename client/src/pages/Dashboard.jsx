import { Outlet } from "react-router-dom";
import NavbarDashboard from "../components/NavbarDashboard";

function Dashboard() {
  return (
    <>
      <h1 className="text-3xl">Dashboard</h1>
      <NavbarDashboard />
      <Outlet />
    </>
  );
}

export default Dashboard;
