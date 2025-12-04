import { Link } from "react-router-dom"

const Navigation = () => {
  return(
    <div>
      <Link to="/">Start</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/habits">Habits</Link>
      <Link to="/eventplanner">Event Planner</Link>
    </div>
  )
} 

export default Navigation