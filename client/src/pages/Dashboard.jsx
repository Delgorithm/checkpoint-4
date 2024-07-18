import { Outlet } from "react-router-dom";
import DashboardSection from "../components/DashboardSection";

function Dashboard() {
  return (
    <article className="flex">
      <DashboardSection />
      <section>
        <Outlet />
      </section>
    </article>
  );
}

export default Dashboard;
