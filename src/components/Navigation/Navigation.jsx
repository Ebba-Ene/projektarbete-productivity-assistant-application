import { Link } from "react-router-dom"
import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <div className={s.menu}>
      <Link to="/">Start</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/habits">Habits</Link>
      <Link to="/eventplanner">Event Planner</Link>
    </div>
  )
}

export default Navigation
