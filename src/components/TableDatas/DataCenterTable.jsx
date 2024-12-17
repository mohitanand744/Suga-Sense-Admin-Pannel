import React from "react";
import { useNavigate } from "react-router-dom";

const DataCenterTable = ({ pathname }) => {
  const navigate = useNavigate();

  const patients = [
    {
      name: "Janim Kim",
      SensorID: "66WS77",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "aktiv",
      status: "normal",
    },
    {
      name: "Janim Kim",
      SensorID: "66WS77",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "beendet",
      status: "normal",
    },
    {
      name: "Janim Kim",
      SensorID: "66WS77",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "beendet",
      status: "normal",
    },
    {
      name: "Kanim Kim",
      SensorID: "66WS77",
      age: 22,
      gender: "männlich",
      phone: "20220 102 45",
      lastData: "2024-06-11 10:03:58",
      glucose: "9.6mmol/L",
      performance: "Sendeleistung: 3",
      startTime: "28-05-2024 03:13:32",
      endTime: "11-06-2024 10:05:50",
      period: "14 Tag(e) 6 Std.",
      monitorStatus: "OnGoing",
      status: "normal",
    },
  ];

  return (
    <div className={` ${pathname !== "dashboard" && "p-3 "}`}>
      {/* 
    
    
    
      <div className="flex items-center px-3 py-1 mb-4 space-x-2 border rounded-md shadow-sm w-fit">
        <span className="font-medium text-gray-400">Date:</span>
        <span className="font-semibold text-gray-700">12-12-2024</span>
        <span className="text-gray-500">To</span>
        <span className="font-semibold text-gray-700">1-1-2025</span>
        <button className="text-gray-400 hover:text-gray-700 focus:outline-none">
          &#x2715; 
          </button>
      </div>
    
     */}

      {/*  <h2 className="mb-4 text-lg font-semibold text-black md:text-2xl">
      Ausgewählte Patienten
    </h2> */}
      <div className="overflow-x-auto hideScrollBar">
        <table className="w-full text-sm text-left border-collapse table-auto whitespace-nowrap lg:whitespace-normal">
          <thead>
            <tr className="font-medium text-gray-600 bg-gray-100 ">
              <th className="px-3 py-4 text-center">Sensor ID</th>
              <th className="px-3 py-4 text-center">Name und Details</th>
              <th className="px-3 py-4 text-center">Letzte Daten</th>
              <th className="px-3 py-4 text-center">Letzter Glucosewert</th>
              <th className="px-3 py-4 text-center">Zeit</th>
              <th className="px-3 py-4 text-center">Überwachungszeitraum</th>
              <th className="px-3 py-4 text-center">Monitor status</th>
              <th className="px-3 py-4 text-center">Status</th>
              <th className="px-3 py-4 text-center">Aktion</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                onClick={() => {
                  navigate("/dashboard/cgmreport");
                }}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-gray-100 `}
              >
                <td className="px-1 ps-3">{patient.SensorID}</td>
                {/* Name and Details */}
                <td className="px-1">
                  <div>
                    <div className="font-semibold text-black">
                      {patient.name}
                    </div>
                    <div className="flex flex-wrap items-center w-full text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <img src="/images/age.png" alt="" />{" "}
                        <span className="mx-1">{patient.age} Jahre</span>{" "}
                      </div>
                      <div className="flex items-center gap-1">
                        <img src="/images/gender.png" alt="" />{" "}
                        <span className="">{patient.gender}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <img src="/images/icons.png" alt="" />
                      {patient.phone}
                    </div>
                  </div>
                </td>

                {/* Letzte Daten */}
                <td className="flex flex-col gap-3 p-1 px-3">
                  <span>{patient.lastData}</span>{" "}
                  <span>Neueste Daten Nr..: 6855</span>
                </td>

                {/* Glucose */}
                <td className="p-4">
                  <span className="font-bold text-blue-600">
                    {patient.glucose}
                  </span>
                  <div className="text-sm text-gray-500">
                    {patient.performance}
                  </div>
                </td>

                {/* Zeit */}
                <td className="p-4">
                  <div>
                    Startzeit:{" "}
                    <span className="text-blue-700">{patient.startTime}</span>
                  </div>
                  <div>Beendet : {patient.endTime}</div>
                </td>

                {/* Überwachungszeitraum */}
                <td className="p-4">{patient.period}</td>

                {/* Monitor status */}
                <td className="p-4">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className={`w-[7rem] text-center px-4 py-2 rounded-xl text-sm font-medium ${
                      patient.monitorStatus === "aktiv"
                        ? "bg-yellow-400 text-white"
                        : patient.monitorStatus === "OnGoing"
                        ? "bg-[#33d613] text-white"
                        : "bg-[#0480CA] text-white"
                    }`}
                  >
                    {patient.monitorStatus}
                  </button>
                </td>

                {/* Status */}
                <td className="p-4 ">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="w-[6rem] text-center px-4 py-2 text-sm font-medium text-white bg-[#0480CA] rounded-xl"
                  >
                    {patient.status}
                  </button>
                </td>

                {/* Aktion */}
                <td className="p-4">
                  <label
                    htmlFor="my_modal_7"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-center bg-gray-500 rounded-xl text-gray-50 hover:bg-gray-400"
                  >
                    <img src="/images/eye.png" alt="" /> view {/* Ansicht */}
                  </label>
                  <div className="flex justify-center gap-1 mt-1">
                    <img src="/images/Onboarding1.png" alt="" />
                    <img src="/images/download.png" alt="" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pathname === "dashboardpatienten" && <Pagination />}
    </div>
  );
};

export default DataCenterTable;
