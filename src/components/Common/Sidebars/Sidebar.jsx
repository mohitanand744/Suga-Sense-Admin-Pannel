import React, { useEffect, useState } from "react";
import UseContextData from "../../../Hooks/UseContextData";
import { Link, useLocation } from "react-router-dom";
import GeräteverwaltungSvg from "./SVGs/Geräteverwaltung.svg";
import DataStorage from "./SVGs/DataStorage.svg";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname.replaceAll("/", "") || "dashboard"
  );
  const [subMenuActive, setSubMenuActive] = useState("");

  console.log(active);

  const { toggleNav, setToggleNav } = UseContextData();

  return (
    <div
      className={`w-[17rem] fixed z-40 ${
        toggleNav ? "left-[0%] " : "left-[-100%] "
      }  xl:left-0 top-0 bottom-0 min-h-[100vh] flex flex-col justify-between items-center p-3 bg-white border-r transition-all duration-200 ease-in-out`}
    >
      <img
        onClick={() => setToggleNav((prev) => !prev)}
        className="absolute block xl:hidden right-2 top-1 w-[2rem] cursor-pointer"
        src="https://img.icons8.com/carbon-copy/100/cancel.png"
        alt=""
      />
      <div className="w-full logo">
        <img className="mx-auto" src="/images/Logo.svg" alt="" />
      </div>

      <div className="w-full h-screen p-1 mt-5">
        <ul className="space-y-4">
          <li onClick={() => setActive("dashboard")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard"}
              className={`flex items-center space-x-4  transition-all duration-150 ease-in hover:text-blue-500  p-2 mx-2 ${
                active === "dashboard"
                  ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear"
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/dashboardIcon.svg" alt="" />
              <span>Armaturenbrett</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardpatienten")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/patienten"}
              className={`flex items-center space-x-4 mx-2 transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardpatienten"
                  ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <GeräteverwaltungSvg color="#868D95" />
              <span>Geräteverwaltung</span>
            </Link>
          </li>

          <Link to={"/dashboard/datacenter"}>
            <li
              onClick={() => setActive("Rechenzentrum")}
              tabIndex={0}
              className="w-full bg-transparent collapse collapse-arrow"
            >
              <div
                className={`flex items-center w-full gap-4 collapse-title  min-h-[11px] py-2 pe-2  transition-all duration-150 ease-in hover:text-blue-500   ${
                  active === "Rechenzentrum"
                    ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear "
                    : "text-gray-600"
                } rounded-[7px]`}
              >
                <DataStorage color={"#868D95"} />
                Rechenzentrum
              </div>
              <div className="ps-10 collapse-content">
                <ul className="mt-2 bg-transparent rounded-t-none">
                  <li
                    onClick={(e) => {
                      setSubMenuActive("data");
                    }}
                    className={`cursor-pointer ${
                      subMenuActive === "data" ||
                      (active === "Rechenzentrum" && "text-blue-600")
                    }`}
                  >
                    Data
                  </li>
                  <li>Monitoring data</li>
                  <li>Monitoring List</li>
                </ul>
              </div>
            </li>
          </Link>

          <Link to={"/dashboard/doctor_accounts"}>
            <li
              onClick={() => setActive("Benutzerverwaltung")}
              tabIndex={0}
              className="w-full bg-transparent collapse collapse-arrow"
            >
              <div
                className={`flex items-center w-full gap-4 collapse-title  min-h-[11px] py-2 pe-2 transition-all duration-150 ease-in hover:text-blue-500   ${
                  active === "Benutzerverwaltung"
                    ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear "
                    : "text-gray-600"
                } rounded-[7px]`}
              >
                <img src="/images/user-icon.png" alt="" />
                Benutzerverwaltung
              </div>
              <div className="ps-10 collapse-content">
                <ul className="mt-2 bg-transparent rounded-t-none">
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      setSubMenuActive("data");
                    }}
                    className={`cursor-pointer ${
                      subMenuActive === "data" ||
                      (active === "Benutzerverwaltung" && "text-blue-600")
                    }`}
                  >
                    Doctors
                  </li>
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      setSubMenuActive("Monitoring");
                    }}
                    className={`cursor-pointer ${
                      subMenuActive === "Monitoring" && "text-blue-600"
                    }`}
                  >
                    Department manager
                  </li>
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      setSubMenuActive("MonitoringList");
                    }}
                    className={`cursor-pointer ${
                      subMenuActive === "MonitoringList" && "text-blue-600"
                    }`}
                  >
                    Monitoring List
                  </li>
                </ul>
              </div>
            </li>
          </Link>
          <li
            onClick={(e) => {
              e.stopPropagation();
              setActive("dashboardsupport");
            }}
          >
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/support"}
              className={`flex items-center space-x-4 mx-2 transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardsupport"
                  ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <img src="/images/infoIcon.png" alt="" />
              <span>Hilfe und Support</span>
            </Link>
          </li>
          <li onClick={() => setActive("dashboardeinstellungen")}>
            <Link
              onClick={() => setToggleNav(!toggleNav)}
              to={"/dashboard/einstellungen"}
              className={`flex items-center space-x-4 mx-2 transition-all duration-150 ease-in hover:text-blue-500  p-2 ${
                active === "dashboardeinstellungen"
                  ? "text-blue-600 bg-blue-100  transition-all duration-150 ease-linear "
                  : "text-gray-600"
              } rounded-md`}
            >
              <span className="flex items-center justify-center w-5 h-5 text-gray-600">
                ⚙️
              </span>
              <span>Einstellung</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <Link to={"/"}>
          <button className="flex items-center w-full px-4 py-2 mx-auto space-x-2 text-lg text-red-500 border border-red-500 rounded-md hover:bg-red-100">
            <img src="/images/signIcon.png" alt="exit" />
            <span> Abmelden</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
