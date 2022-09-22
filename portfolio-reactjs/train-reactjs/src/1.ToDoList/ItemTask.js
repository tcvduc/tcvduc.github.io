import React from "react";

const ItemTask = () => {
  return (
    <div className="itemTask">
      <div className="layerItemTaskNameAndDescription">
        <div className="itemTaskName">Task Name</div>
        <div className="itemTaskDescription">Task Description</div>
      </div>
      <div className="layerTaskStatusAndDeleteButton">
        <div className="buttonStatus working">Status Button</div>
        <div className="buttonDelete">Delete</div>
      </div>
    </div>
  );
};

export default ItemTask;
