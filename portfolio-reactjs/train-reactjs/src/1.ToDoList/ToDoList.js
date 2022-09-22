import "./style.css";
import InputTask from "./InputTask";
import ListTask from "./ListTask";
import ItemTask from "./ItemTask";
import React from "react";

/**
 *
 * @param {number} n
 */
function generateTaskData(n) {
  const ret = [];

  for (let i = n; i >= 1; --i) {
    let task = {
      taskName: `task ${i}`,
      taskDescription: `description ${i}`,
      taskStatus: Math.random() >= 0.5,
    };

    ret.push(task);
  }

  return ret;
}

const ToDoList = () => {
  const [tasks, setTasks] = React.useState([]);

  const addTaskProcess = function (task) {
    const newTaskData = [task, ...tasks];
    setTasks(newTaskData);
  };

  React.useEffect(function () {
    // const generate10Task = generateTaskData(10);
    // setTasks(generate10Task);
  }, []);

  return (
    <div className="layer">
      <div className="title">To Do List</div>
      <div className="layerInputTaskAndListTask">
        <InputTask addTaskProcess={addTaskProcess} />

        <ListTask>
          {tasks.map(function (task, index) {
            return <ItemTask {...task} key={index} />;
          })}
        </ListTask>
      </div>
    </div>
  );
};

export default ToDoList;
