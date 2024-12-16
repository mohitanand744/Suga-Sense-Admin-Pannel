import React from "react";

const GeräteverwaltungTable = () => {
  // Sample Data Array
  const tableData = [
    {
      id: 1,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Marvin McKinney",
      deliveryTime: "08.11.2024 10:03:58",
      status: "geliefert",
    },
    {
      id: 2,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Ronald Richards",
      deliveryTime: "08.11.2024 10:03:58",
      status: "nicht zugeteilt",
    },
    {
      id: 3,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Annette Schwarz",
      deliveryTime: "08.11.2024 10:03:58",
      status: "geliefert",
    },
    {
      id: 1,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Marvin McKinney",
      deliveryTime: "08.11.2024 10:03:58",
      status: "geliefert",
    },
    {
      id: 2,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Ronald Richards",
      deliveryTime: "08.11.2024 10:03:58",
      status: "nicht zugeteilt",
    },
    {
      id: 3,
      nein: "66WS77",
      product: "Sender Typ III",
      senderId: "022309301",
      chargeNumber: "-",
      distributor: "ETH",
      agent: "Annette Schwarz",
      deliveryTime: "08.11.2024 10:03:58",
      status: "geliefert",
    },
  ];

  // Function to get status badge color
  const getStatusClass = (status) => {
    switch (status) {
      case "geliefert":
        return "bg-green-700";
      case "nicht zugeteilt":
        return "bg-gray-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="px-5 mx-auto mt-4 ">
      <div className="overflow-x-auto hideScrollBar">
        <table className="w-full text-sm text-left border-collapse table-auto whitespace-nowrap">
          <thead>
            <tr className="text-sm text-left text-gray-700 bg-gray-100">
              <th className="px-4 py-3 text-center border-b">Wählen</th>
              <th className="px-4 py-3 text-center border-b">NEIN</th>
              <th className="px-4 py-3 text-center border-b">Produkt</th>
              <th className="px-4 py-3 text-center border-b">Sender-ID</th>
              <th className="px-4 py-3 text-center border-b">Chargennummer</th>
              <th className="px-4 py-3 text-center border-b">Verteiler</th>
              <th className="px-4 py-3 text-center border-b">Agent</th>
              <th className="px-4 py-3 text-center border-b">
                Zeitpunkt Der Lieferung
              </th>
              <th className="px-4 py-3 text-center border-b">Status</th>
              <th className="px-4 py-3 text-center border-b">Aktion</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-sm text-gray-700">
            {tableData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 pb-5 mx-auto border-b ">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mx-auto md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 bg-gray-300 rounded-md appearance-none checked:after:content-['✓'] checked:after:text-white flex justify-center items-center  checked:bg-[#0480CA]"
                  />
                </td>
                <td className="px-4 py-2 text-center text-blue-500 border-b cursor-pointer">
                  {row.nein}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  {row.product}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  {row.senderId}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  {row.chargeNumber}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  {row.distributor}
                </td>
                <td className="px-4 py-2 text-center border-b">{row.agent}</td>
                <td className="px-4 py-2 text-center border-b">
                  {row.deliveryTime}
                </td>
                <td className="px-4 py-2 text-center border-b">
                  <button
                    className={`${getStatusClass(
                      row.status
                    )} text-white px-2 py-2 w-full rounded-md text-xs`}
                  >
                    {row.status}
                  </button>
                </td>
                <td className="px-4 py-2 space-x-2 border-b">
                  <button className="px-3 py-2 mx-auto text-gray-100 bg-gray-500 rounded hover:bg-gray-300">
                    Details
                  </button>
                  <button className="px-3 mx-auto py-2 text-white bg-[#94d4f2] rounded hover:bg-blue-600">
                    Zuweisung
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GeräteverwaltungTable;
