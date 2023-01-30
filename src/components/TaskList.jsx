import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-full">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 p-10 text-white shadow-2xl py-5 mb-4 md:flex md:justify-between rounded-lg"
            key={task.id}
          >
            <div className="w-full md:w-1/3">
              <h1 className="text-2xl capitalize">{task.title}</h1>
              <hr />
              <p className="text-lg lowercase p-4">{task.description}</p>
              <hr />
              <p className="text-xs pt-2">ID: {task.id}</p>
            </div>
            <div className="w-full md:w-1/3 p-5 self-center">
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-400 py-2 px-4 mr-2 rounded"
              >
                Editar
              </Link>
              <button
                className="bg-red-600 hover:bg-red-400 py-2 px-4 mr-2 mt-4 md:mt-0 rounded"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                Eliminar
              </button>
            </div>
            <div className="w-full md:w-1/3 p-5 self-center">
              {task.done ? (
                <button
                  className="bg-gray-600 hover:bg-gray-400 py-2 px-4 mr-2 rounded"
                  onClick={() => {
                    toggleTaskDone(task.id);
                  }}
                >
                  Pendiente
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-400 py-2 px-4 mr-2 rounded"
                  onClick={() => {
                    toggleTaskDone(task.id);
                  }}
                >
                  Tarea Realizada
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
