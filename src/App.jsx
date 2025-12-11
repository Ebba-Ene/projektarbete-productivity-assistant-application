import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage/HomePage"
import TodoPage from "./pages/TodoPage/TodoPage"
import EventPlannerPage from "./pages/EventPlannerPage/EventPlannerPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import Navigation from "./components/Navigation/Navigation"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/eventplanner" element={<EventPlannerPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
