import React, { useContext } from "react";

const AllTask = () => {
  const authData = useContext();

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto">
      {authData.employees.map(function (element) {
        return (
          <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h3>{element.firstName}</h3>
            <h3>Makea a UI Design</h3>
            <h5>Status</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
