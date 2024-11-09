import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import About from "./About/About";
const Layaout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-6">
      <Sidebar />
      <div className="col-span-2 hidden overflow-y-scroll lg:block">
        <About />
      </div>
      <div className="col-span-4">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layaout;
