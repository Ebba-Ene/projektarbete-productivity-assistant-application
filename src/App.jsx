import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import TodoPage from "./pages/TodoPage/TodoPage"
import EventPlannerPage from "./pages/EventPlannerPage/EventPlannerPage"
import HabitsPage from "./pages/HabitsPage/HabitsPage"
import Navigation from "./components/Navigation/Navigation"
import { UserContext } from "./context/UserContext"
import { useContext } from "react"

function App() {
  const { currentUser } = useContext(UserContext)

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={currentUser ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/eventplanner" element={<EventPlannerPage />} />
          <Route path="/habits" element={<HabitsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
