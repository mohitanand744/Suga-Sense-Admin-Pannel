import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

const PatientenTable = React.lazy(() => import("../TableDatas/TableDataChart"));
import SearchFilterBar from "./../SearchBars/SearchFilterBar";
import CGMReport from "../Reports/CGMReport";
import HilfeSupport from "../Support/HilfeSupport";
import ProfilePage from "../Profiles/Profile";
import GeräteverwaltungTable from "../TableDatas/GeräteverwaltungTable";
import Pagination from "../Paginations/Pagination";

const Dashboard = () => {
  const location = useLocation();
  const pathname = location.pathname.replaceAll("/", "");

  return (
    <div
      className={`${pathname === "dashboard" && " p-3 md:p-8"} dashboard ${
        pathname === "dashboardcgmreport" ? "bg-gray-100 " : "bg-white"
      }`}
    >
      {pathname === "dashboard" ||
      pathname === "dashboardpatienten" ||
      pathname === "dashboardsupport" ? (
        <>
          {pathname === "dashboard" ? (
            <div className="flex flex-wrap justify-between w-auto gap-2 dashboardSection1">
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[24%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg2.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Aktive Sensoren</h2>
                  <h1 className="text-2xl font-semibold text-black">1265</h1>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[24%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg1.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Geräte</h2>
                  <h1 className="text-2xl font-semibold text-black">2354</h1>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[24%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg1.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Abteilungen</h2>
                  <h1 className="text-2xl font-semibold text-black">26</h1>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white shadow-lg w-full lg:w-[24%] rounded-xl">
                <div className="">
                  <img src="/images/dashboardImg1.png" alt="" />
                </div>
                <div className="txt">
                  <h2 className="text-slate-500">Ärzte</h2>
                  <h1 className="text-2xl font-semibold text-black">524</h1>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <SearchFilterBar pathname={pathname} />

          {pathname === "dashboard" ? (
            <Suspense
              fallback={
                <center className="flex items-center justify-center w-full h-[30vh]">
                  <img src="/images/Logo.svg" alt="" />
                </center>
              }
            >
              <PatientenTable pathname={pathname} />
            </Suspense>
          ) : (
            ""
          )}
        </>
      ) : pathname === "dashboardcgmreport" ? (
        <>
          <SearchFilterBar pathname={pathname} />

          <CGMReport />
        </>
      ) : (
        ""
      )}

      {pathname === "dashboardsupport" && (
        <>
          <HilfeSupport />
        </>
      )}

      {pathname === "dashboardprofile" && <ProfilePage />}

      {pathname === "dashboardpatienten" && (
        <>
          <GeräteverwaltungTable />
          <Pagination />
        </>
      )}
    </div>
  );
};

export default Dashboard;
