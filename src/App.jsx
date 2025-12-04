import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home/Home"
import Todo from "./pages/Todo/Todo"
import EventPlanner from "./pages/EventPlanner/EventPlanner"
import Habits from "./pages/Habits/Habits"

function App() {
  return (
    <>
    <BrowserRouter>
      <h1>Startsida</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/eventplanner' element={<EventPlanner/>}/>
        <Route path='/habits' element={<Habits/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
