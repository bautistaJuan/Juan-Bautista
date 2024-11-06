import { Link } from "react-router-dom";
// Icons

import { useState } from "react";
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setshowSubMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed bg-yellow-300 w-[55%] h-full ${showMenu ? "right-0" : "-right-full"
          } top-0 p-5 flex flex-col justify-between text-[1rem] sm:text-[1.3rem] transition-all duration-1000`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold">Admin</h1>
          <ul className=" pt-8">
            <li>
              Analítica
            </li>
            <li>
              <button
                className="flex  items-center justify-between   py-2 px-1 w-full  rounded-md  hover:bg-secondary-900 "
                onClick={() => setshowSubMenu(!showSubMenu)}
              >
                {" "}
                <span className="flex items-center gap-1.5">
                  Redes Sociales
                </span>
              </button>
              <ul
                className={`mt-1 ${showSubMenu ? "transition-all duration-1000" : "hidden"
                  } `}
              >
                <li>
                  <Link className="redes-links" to="/">
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link className="redes-links" to="/">
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link className="redes-links" to="/">
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-2  py-2 px-1  rounded-md my-4 hover:bg-secondary-900 "
              >
                {" "}
                Mensajes
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 py-2 px-1 rounded-md my-4 hover:bg-secondary-900 "
              >
                {" "}
                Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/auth"
            className="flex items-center gap-2  py-2 px-1 rounded-md my-4 hover:bg-secondary-900 "
          >
            {" "}
            Salir
          </Link>
        </nav>
      </div>
      <button
        className="fixed right-4 bottom-10 bg-primary p-3 rounded-full w-[100px] h-[100px] text-[2.9rem] font-bold"
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? "X" : "Menu"}
      </button>
    </>
  );
};

export default Sidebar;
