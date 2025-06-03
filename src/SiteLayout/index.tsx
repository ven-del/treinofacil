import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const SiteLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="pt-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SiteLayout;