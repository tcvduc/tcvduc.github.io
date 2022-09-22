import React from "react";

const InputTask = () => {
  const handleInputTaskNameChange =
    /**
     *
     * @param {React.ChangeEvent} event
     */
    function (event) {
      console.log(event);
    };

  return (
    <div className="inputTask">
      <div className="layerTaskNameAndDescription">
        <div className="taskName">
          <label className="labelTaskName">Name</label>
          <input
            onChange={handleInputTaskNameChange}
            className="inputTaskName"
          />
        </div>
        <div className="taskDescription">
          <label className="labelTaskDescription">Description</label>
          <input className="inputTaskDescription" />
        </div>
      </div>
      <div className="buttonAddTask">Add Task</div>
    </div>
  );
};

export default InputTask;
