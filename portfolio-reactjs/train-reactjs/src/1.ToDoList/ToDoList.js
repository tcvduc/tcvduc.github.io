import "./style.css";
import InputTask from "./InputTask";
import ListTask from "./ListTask";
import React from "react";

const ToDoList = () => {
  return (
    <div className="layer">
      <div className="title">To Do List</div>
      <div className="layerInputTaskAndListTask">
        <InputTask />
        <ListTask />
      </div>
    </div>
  );
};

export default ToDoList;
