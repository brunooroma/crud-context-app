import { createContext, useReducer } from "react";
import { appReducer } from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "titulo uno",
      description: "esta es la descripcion de la tarea 1",
      done: false,
    },
    {
      id: 2,
      title: "titulo dos",
      description: "aca hay que detallar la tarea 2",
      done: false,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4(), done: false } });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const updateTask = (task) => {
    dispatch({type: 'UPDATE_TASK', payload: task})
  };

  const toggleTaskDone = (id) => {
    dispatch({type: 'TOGGLE_TASK_DONE', payload: id})
  }

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone }}>
      {children}
    </GlobalContext.Provider>
  );
};
