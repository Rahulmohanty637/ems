import React from "react";

const NewTask = () => {
  return (
    <div className="flex-shrink-0 bg-green-400 h-full w-[300px] p-5 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-md">High</h3>
        <h4 className="text-sm">20 Feb 2024</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Complete This Project</h2>
      <p className="text-sm mt-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, facilis
        atque! Deleniti aut voluptate nihil?
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
