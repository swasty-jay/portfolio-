import { Outlet } from "react-router";
import Navbar from "./features/NavBar";
function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-6">
        {/* Prevents content from going under navbar */}
        <Outlet /> {/* Renders the current route */}
      </main>
    </>
  );
}

export default AppLayout;
