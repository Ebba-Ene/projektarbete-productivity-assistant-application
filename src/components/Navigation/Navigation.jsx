import { Link } from "react-router-dom";
import s from "./Navigation.module.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Navigation = () => {
  const { logoutUser, currentUser } = useContext(UserContext);

  return (
    <>
      {!currentUser ? (
        <div className={s.menu}>
          <div className={s.left}>
            <Link to="/">
              <h1>Livsplaneraren</h1>
            </Link>
          </div>
        </div>
      ) : (
        <div className={s.menu}>
          <div className={s.left}>
            <Link to="/">
              <h1>Livsplaneraren</h1>
            </Link>
          </div>

          <div className={s.right}>
            <Link to="/todo">Ärenden</Link>
            <Link to="/habits">Rutiner</Link>
            <Link to="/eventplanner">Händelser</Link>
          </div>

          <button className={s.logout} onClick={() => {logoutUser();}}>Logga ut</button>
        </div>
      )}
    </>
  );
};

export default Navigation;
