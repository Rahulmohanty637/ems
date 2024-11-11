import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-80">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h3 className="w-1/5">Employee Name</h3>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div className="h-full">
        {userData.map(function (element, index) {
          return (
            <div key={index} className="mb-2 py-2 px-4 flex justify-between rounded">
              <h3 className="text-lg font-medium w-1/5">{element.firstName}</h3>
              <h5 className="text-lg font-medium w-1/5 text-blue-600">
                {element.taskNumbers.newTask}
              </h5>
              <h3 className="text-lg font-medium w-1/5 text-yellow-600">
                {element.taskNumbers.active}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-green-600">
                {element.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {element.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
