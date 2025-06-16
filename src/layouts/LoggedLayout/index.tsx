import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import LoggedFooter from "../../components/LoggedFooter";
import Header from "../../components/Header";


const LoggedLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col justify-between w-full">
        <Header />
        <div className="overflow-y-auto">
          <Outlet />
        </div>
        <LoggedFooter />
      </div>
    </div>
  );
};

export default LoggedLayout;
