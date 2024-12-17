import React from "react";

const GeräteverwaltungForm = () => {
  return (
    <>
      {/* Modal */}

      <input type="checkbox" id="my_modal_10" className=" modal-toggle" />
      <div className="modal" role="dialog">
        <div className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md modal-box">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-black ">
              Gerätezuordnung
            </h2>
            <button className="p-2 text-red-500 rounded-full hover:bg-red-100">
              &#x2715;
            </button>
          </div>

          {/* Search Field */}
          <div className="flex items-center justify-between mb-4 rounded-md">
            <span className="px-3 text-gray-500">Wählen</span>
            <div className="flex items-center border-2 rounded-xl">
              <input
                type="text"
                placeholder="Geben Sie den Kontonamen ein"
                className="w-full px-3 py-2 bg-transparent focus:outline-none"
              />
              <span className="px-3 text-gray-400">&#128269;</span>
            </div>
          </div>

          {/* User List */}
          <ul className="space-y-4">
            {[
              "Marvin McKinney",
              "Annette Schwarz",
              "Ronald Richards",
              "Theresa Webb",
            ].map((name, index) => (
              <li
                key={index}
                className="flex items-center justify-between px-1"
              >
                <span className="text-gray-700">{name}</span>
                <input
                  type="checkbox"
                  className="w-4 h-4 mx-auto md:w-5 md:h-5 mr-0 text-blue-600 bg-gray-300 rounded-md appearance-none checked:after:content-['✓'] checked:after:text-white flex justify-center items-center  checked:bg-[#0480CA]"
                />
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
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
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_10">
          Close
        </label>
      </div>
    </>
  );
};

export default GeräteverwaltungForm;
