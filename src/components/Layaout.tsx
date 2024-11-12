import { Outlet } from "react-router-dom";
import Header from "./Header";
import About from "./About/About";
const Layaout = () => {
  return (
    <div className="h-screen overflow-hidden grid grid-cols-1 lg:grid-cols-6">
      <div className="col-span-2 hidden lg:block overflow-y-scroll pb-4">
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
