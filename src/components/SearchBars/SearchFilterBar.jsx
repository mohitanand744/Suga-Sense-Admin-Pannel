import React from "react";
import { useNavigate } from "react-router-dom";

const SearchFilterBar = ({ pathname }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex w-full flex-wrap justify-center px-5  ${
        pathname === "dashboard" ||
        pathname === "dashboardcgmreport" ||
        pathname === "dashboardsupport" ||
        pathname === "dashboardpatienten" ||
        pathname === "dashboarddatacenter" ||
        pathname === "dashboarddoctor_accounts"
          ? "md:justify-between gap-8"
          : "lg:justify-end"
      } items-center  gap-2 bg-[#81BFE4] ${
        pathname === "dashboardpatienten" ||
        pathname === "dashboardcgmreport" ||
        pathname === "dashboardsupport" ||
        pathname === "dashboarddatacenter" ||
        pathname === "dashboarddoctor_accounts"
          ? "mb-5"
          : "my-5"
      } ${pathname === "dashboard" ? "rounded-lg p-3 sm:p-4" : "py-6"}`}
    >
      {/* First Input */}

      <div
        className={` font-semibold text-white ${
          pathname === "dashboardpatienten" ||
          pathname === "dashboardcgmreport" ||
          pathname === "dashboarddoctor_accounts"
            ? " text-3xl"
            : "text-2xl"
        }`}
      >
        <p>
          {pathname === "dashboardpatienten" ? (
            "Geräteverwaltung"
          ) : pathname === "dashboardcgmreport" ? (
            <>
              <div className="flex items-center gap-5">
                <span>
                  {" "}
                  <img
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                    className="w-12 transition-all duration-200 ease-linear cursor-pointer md:w-16 hover:scale-105 active:scale-95"
                    src="/images/Back-button.png"
                  />
                </span>
                CGM-Bericht
              </div>
            </>
          ) : pathname === "dashboard" ? (
            "4 Resultate gefunden"
          ) : pathname === "dashboardsupport" ? (
            "Hilfe und Support"
          ) : pathname === "dashboarddatacenter" ? (
            "Rechenzentrum DATA"
          ) : pathname === "dashboarddoctor_accounts" ? (
            "Doctors"
          ) : (
            ""
          )}
        </p>
      </div>
      {pathname === "dashboardcgmreport" ? (
        <>
          <ul className="flex flex-wrap gap-8 p-2 text-white list-disc sm:gap-10">
            <div className="">
              <li>
                <b>Name</b>: Janim Kim
              </li>
              <li>
                <b>Sex</b>: Male
              </li>
              <li>
                <b>Age</b> : 29 Years
              </li>
            </div>
            <div className="">
              <li>
                <b>Account</b>: Janim35
              </li>
              <li>
                <b>Report date</b>: 2024-11-19
              </li>
            </div>
          </ul>
        </>
      ) : pathname === "dashboard" ||
        pathname === "dashboardpatienten" ||
        pathname === "dashboarddatacenter" ||
        pathname === "dashboarddoctor_accounts" ? (
        <>
          <div className="w-[75%] flex gap-2">
            {pathname !== "dashboarddoctor_accounts" && (
              <div className="flex  items-center px-3 bg-white rounded-md shadow w-full mx-auto md:mx-0 md:w-[30%]">
                <input
                  type="text"
                  placeholder="Patientennamen"
                  className="w-full p-2 bg-transparent outline-none"
                />
                <button className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex  items-center px-3 bg-white rounded-md shadow w-full mx-auto md:mx-0 md:w-[55%] xxl:w-[30%]">
              <input
                type="text"
                placeholder="Patientennamen"
                className="w-full p-2 bg-transparent outline-none"
              />
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Second Input */}
            <div className="flex items-center px-3 bg-white rounded-md shadow w-full sm:w-[25%] mx-auto md:mx-0 md:w-[55%] xxl:w-[30%]">
              <input
                type="text"
                placeholder="Geben Sie das Monitorkonto ein"
                className="w-full p-2 bg-transparent outline-none"
              />
              <button className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
            {/* Filter Button */}
            <label
              htmlFor="my_modal_8"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center text-sm w-52 gap-1 text-center justify-center md:text-lg  mx-auto hover:scale-105 transition-all duration-200 ease-in md:mx-0 px-2 md:px-4 py-1 md:py-2 font-semibold text-[#0480CA] bg-white rounded-md shadow active:scale-95"
            >
              {pathname === "dashboarddoctor_accounts" ? (
                <>
                  {" "}
                  <img src="/images/addAccount.png" alt="" /> Add Account{" "}
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 mt-1 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-1.447.894l-3-1.5A1 1 0 019 17.586V12.414a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z"
                    />
                  </svg>
                  Filter
                </>
              )}
            </label>
          </div>
        </>
      ) : (
        <button className="flex items-center text-sm md:text-lg  mx-auto hover:scale-105 transition-all duration-200 ease-in md:mx-0 px-2 md:px-4 py-1 md:py-2 font-semibold text-[#0480CA] bg-white rounded-md shadow active:scale-95">
          Kontaktieren Sie uns
        </button>
      )}
    </div>
  );
};

export default SearchFilterBar;
