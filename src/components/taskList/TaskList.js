import React from "react";
import "./TaskList.scss";
import swal from "sweetalert";

const TaskList = ({ data, onTaskDelete, onTaskComplete, onTaskEdit }) => {
  const editTaskDialog = async (task) => {
    const value = await swal({
      title: "Edit Task",
      content: {
        element: "input",
        attributes: {
          type: "text",
          value: task.title,
          placeholder: "Insert the updated task",
        },
      },
      button: "Save",
    });

    if (value) {
      onTaskEdit(task.id, value);
    }
  };

  return (
    <div className="task-list">
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              title="Complete task"
              checked={task.isCompleted === true ? "checked" : ""}
              onChange={() => onTaskComplete(task.id, !task.isCompleted)}
            ></input>
            <p
              title="Task title. Double click to edit."
              onDoubleClick={editTaskDialog.bind(this, task)}
              className="task-text"
            >
              {task.title}{" "}
            </p>

            {task.priority ? (
              <span className={`label priority-${task.priority}`}>
                <small>{task.priority}</small>
              </span>
            ) : (
              ""
            )}

            <button
              className="btn btn-edit"
              onClick={editTaskDialog.bind(this, task)}
            >
              Edit
            </button>
            <button
              className="btn btn-delete"
              title="Delete this task"
              type="button"
              onClick={() => onTaskDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
