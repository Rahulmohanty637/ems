import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="overflow-x-auto h-[55%] w-full mt-10 py-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((element, index) => {
        if (element.active) {
          return <AcceptTask key={index} />;
        }
        if (element.newTask) {
          return <NewTask key={index} />;
        }
        if (element.completed) {
          return <CompleteTask key={index} />;
        }
        if (element.failed) {
          return <FailedTask key={index} />;
        }
      })}
    </div>
  );
};

export default TaskList;
