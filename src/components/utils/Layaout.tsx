import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layaout = () => {
  return (
    <div className="h-screen max-w-4xl flex flex-col mx-auto overflow-hidden">
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
