import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate, useParams } from "react-router-dom";

const TaskForm = () => {
  const { addTask, tasks, updateTask } = useContext(GlobalContext);
  const navigateTo = useNavigate();
  const params = useParams();

  const [task, setTask] = useState({
    id: null,
    title: "",
    description: "",
    done: false
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.id) {
      updateTask(task)
    }else {
      addTask(task);
    }

    navigateTo("/tasklist");
  };

  useEffect(() => {
    const taskFound = tasks.find((task) => task.id == params.id);

    if (taskFound) {
      setTask(taskFound)
    }
  }, [params.id,tasks]);

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-zinc-900 p-10 rounded-2xl" onSubmit={handleSubmit}>
        <h2 className="mb-7 text-3xl">{task.id ? 'Editando una tarea' : 'Creando una tarea'}</h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Escriba un titulo"
            onChange={handleChange}
            value={task.title}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          />
        </div>

        <div className="mb-5">
          <textarea
            name="description"
            rows="2"
            placeholder="Escribe una descripcion"
            onChange={handleChange}
            value={task.description}
            className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
          ></textarea>
        </div>
        <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5 rounded">
          {task.id ? 'Editar Tarea' : 'Crear Tarea'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
