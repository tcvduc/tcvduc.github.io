import React from "react";

const ItemTask = (props) => {
  const { taskName, taskDescription, taskStatus } = props;

  return (
    <div className="itemTask">
      <div className="layerItemTaskNameAndDescription">
        <div className="itemTaskName">{taskName}</div>
        <div className="itemTaskDescription">{taskDescription}</div>
      </div>
      <div className="layerTaskStatusAndDeleteButton">
        {taskStatus === true ? (
          <div className="buttonStatus completed">Completed</div>
        ) : (
          <div className="buttonStatus working">Working</div>
        )}

        <div className="buttonDelete">Delete</div>
      </div>
    </div>
  );
};

export default ItemTask;
