import React from "react";

const DoctorsTable = () => {
  const users = [
    {
      account: "Admin#1",
      name: "Cody Fisher",
      accountNo: "022309301",
      email: "felicia.reid@example.com",
    },
    {
      account: "Admin#12",
      name: "Albert Flores",
      accountNo: "022309301",
      email: "-",
    },
    {
      account: "Admin#12",
      name: "Jerome Bell",
      accountNo: "022309301",
      email: "kenzi.lawson@example.com",
    },
    {
      account: "Admin#12",
      name: "Ronald Richards",
      accountNo: "022309301",
      email: "debbie.baker@example.com",
    },
    {
      account: "Admin#12",
      name: "Wade Warren",
      accountNo: "022309301",
      email: "willie.jennings@example.com",
    },
    {
      account: "Admin#12",
      name: "Brooklyn Simmons",
      accountNo: "022309301",
      email: "alma.lawson@example.com",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="text-gray-600 bg-gray-100">
          <tr>
            <th className="p-3 text-center">Select</th>
            <th className="p-3 text-center">Account</th>
            <th className="p-3 text-center">Name</th>
            <th className="p-3 text-center">Account No.</th>
            <th className="p-3 text-center">Email</th>
            <th className="p-3 text-center">Status</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-gray-700 divide-y divide-gray-200">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {/* Select Checkbox */}
              <td className="p-3 pr-5 text-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 mx-auto md:w-5 md:h-5 mr-2 md:mr-3 text-blue-600 bg-gray-300 rounded-md appearance-none checked:after:content-['✓'] checked:after:text-white flex justify-center items-center  checked:bg-[#0480CA]"
                />
              </td>
              {/* Account */}
              <td className="p-3 text-center text-blue-600">{user.account}</td>
              {/* Name */}
              <td className="p-3 font-semibold text-center">{user.name}</td>
              {/* Account No */}
              <td className="p-3 text-center">{user.accountNo}</td>
              {/* Email */}
              <td className="p-3 text-center">{user.email}</td>
              {/* Status */}
              <td className="p-3 mx-auto text-center">
                <span className="inline-block px-3 py-1 mx-auto text-white bg-[#0480CA] rounded">
                  Normal
                </span>
              </td>
              {/* Actions */}
              <td className="flex justify-center gap-2 p-3">
                <label
                  htmlFor="my_modal_7"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-center bg-gray-500 rounded-xl text-gray-50 hover:bg-gray-400"
                >
                  <img src="/images/eye.png" alt="" />
                </label>
                <button
                  className="px-8 py-1 text-white bg-[#94D4F3] rounded hover:bg-blue-600"
                  title="Edit"
                >
                  Edit
                </button>
                <button
                  className="p-2 text-gray-700 bg-gray-500 rounded hover:bg-gray-300"
                  title="Manage"
                >
                  <img src="/images/password.png" alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsTable;
