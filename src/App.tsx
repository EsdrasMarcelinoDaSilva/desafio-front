import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TodoList from "./components/todoList/TodoList"
import ListScreen from "./components/listScreen/ListScreen"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Home from "./components/home/Home"


function App() {

  return (
      <>
      <ToastContainer />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<TodoList />} />
            <Route path="/list/:listId" element={<ListScreen />} /> 
            <Route path="/list/:listId/tasks/:taskIds" element={<ListScreen />} />
          </Routes>
        </Router>
      </>
    )
}

export default App
