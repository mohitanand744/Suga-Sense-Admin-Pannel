import React from "react";

const ModelFilter = () => {
  return (
    <>
      {/* Modal */}

      <input type="checkbox" id="my_modal_8" className=" modal-toggle" />
      <div className="modal" role="dialog">
        <div className="p-6 mx-auto bg-white shadow-lg rounded-2xl modal-box">
          <div className="">
            <h2 className="mb-4 text-2xl font-semibold text-black">Filter</h2>
          </div>

          {/* Date Filter */}
          <div className="flex items-center mb-4 space-x-4">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-normal text-gray-900">
                Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="mt-3 text-gray-500">To</div>
            <div className="flex-1 mt-5">
              <input
                type="date"
                className="w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Gender & Status */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-sm font-normal text-gray-900">
                Gender
              </label>
              <input
                type="text"
                placeholder="Male"
                className="w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-normal text-gray-900">
                Status
              </label>
              <input
                type="text"
                placeholder="Normal"
                className="w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Monitor Status & Time */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-sm font-normal text-gray-900">
                Monitor Status
              </label>
              <input
                type="text"
                placeholder="Active"
                className="w-full px-3 py-2 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-normal text-gray-900">
                Monitored Time
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  placeholder="00"
                  className="w-16 px-2 py-1 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-sm text-gray-500">Day(s)</span>
                <input
                  type="number"
                  placeholder="00"
                  className="w-16 px-2 py-1 text-gray-700 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <span className="text-sm text-gray-500">Hour(s)</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between space-x-2">
            <button className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Apply
            </button>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor="my_modal_8">
          Close
        </label>
      </div>
    </>
  );
};

export default ModelFilter;
