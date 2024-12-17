import React from "react";

const DetailsForm = () => {
  return (
    <>
      {/* Modal */}

      <input type="checkbox" id="my_modal_9" className=" modal-toggle" />
      <div className="modal" role="dialog">
        <div className="p-6 mx-auto bg-white rounded-md shadow-md modal-box">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Details</h2>
            <button className="p-2 text-red-500 rounded-full hover:bg-red-100">
              &#x2715;
            </button>
          </div>

          {/* Form */}
          <form>
            {/* Sender-ID */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Sender-ID</label>
              <input
                type="text"
                defaultValue="022309301"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Gerätemodell */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Gerätemodell</label>
              <input
                type="text"
                defaultValue="Ca6e7ec093b8eb36e1de4eb9dd2822e"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Zeitpunkt Der Lieferung */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">
                Zeitpunkt Der Lieferung
              </label>
              <input
                type="datetime-local"
                defaultValue="2024-11-06T10:03:58"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Chargennummer */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Chargennummer</label>
              <input
                type="text"
                placeholder="Bitte Geben Sie Die Chargennummer Ein.."
                className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Agenten */}
            <div className="mb-6">
              <label className="block mb-1 text-gray-700">Agenten</label>
              <input
                type="text"
                defaultValue="ETH"
                className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 text-gray-500 bg-gray-200 rounded-md cursor-not-allowed"
              >
                schließen
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
              >
                bestätigen
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_9">
          Close
        </label>
      </div>
    </>
  );
};

export default DetailsForm;
