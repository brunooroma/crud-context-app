import "./App.css";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Route, Routes } from "react-router-dom";
import {ContextProvider} from './context/GlobalContext'

function App() {
  return (
    <div>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
      <ContextProvider>
      <Heading />
          <Routes>
            <Route path='/' element={<h1 className="text-3xl">Lista de Tareas</h1>} />
            <Route path="/tasklist" element={<TaskList />} />
            <Route path="/taskform" element={<TaskForm />} />
            <Route path='/edit/:id' element={<TaskForm />} />
          </Routes>
      </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
