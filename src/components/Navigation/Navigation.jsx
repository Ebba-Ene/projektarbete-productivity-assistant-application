import { Link } from "react-router-dom"
import s from "./Navigation.module.css"

const Navigation = () => {
  return (
    <>
      <div className={s.menu}>
        <div className={s.left}>
          <Link to="/"><h1>[ Livsplaneraren ]</h1></Link>
        </div>
        <div className={s.right}>
          <Link to="/todo">Todos</Link>
          <Link to="/habits">Habits</Link>
          <Link to="/eventplanner">Events</Link>
        </div>
      </div>
    </>
  )
}

export default Navigation
