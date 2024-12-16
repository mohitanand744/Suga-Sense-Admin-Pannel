import React from "react";

const ModelAnsicht = () => {
  return (
    <>
      {/* Modal */}

      <input type="checkbox" id="my_modal_7" className=" modal-toggle" />
      <div className="modal" role="dialog">
        <div className="text-center text-black bg-white modal-box">
          <h3 className="text-xl font-bold md:text-3xl">Anfrage senden</h3>

          <div className="border border-blue-600 w-[16rem] mx-auto rounded-2xl mt-4 py-2">
            <p className="font-semibold text-black ps-[1.6rem] text-start">
              Janim Kim
            </p>
            <div className="flex flex-wrap items-center ps-[1.6rem] w-full gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <img src="/images/age.png" alt="" />{" "}
                <span className="mx-1">22 Jahre</span>{" "}
              </div>
              <div className="flex items-center gap-1">
                <img src="/images/gender.png" alt="" />{" "}
                <span className="">männlich</span>
              </div>
            </div>
            <div className="flex items-center ps-[1.6rem] gap-1 mt-1 text-sm text-gray-500">
              <img src="/images/icons.png" alt="" />
              5436 3555 53653
            </div>
          </div>

          <p className="py-4 text-lg text-gray-500">
            Wir haben die Anfrage an den Patientenantrag gesendet, als die
            Anfrage akzeptiert wurde. Details werden automatisch angezeigt..
          </p>

          <button className="p-3 px-4 text-white bg-gray-500 rounded-lg">
            Anfrage erneut senden
          </button>
          <p className="mt-2 text-gray-600">0:59</p>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default ModelAnsicht;
