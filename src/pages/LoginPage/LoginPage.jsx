import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import s from "./LoginPage.module.css"

const LoginPage = () => {
  const { addUser, loginUser } = useContext(UserContext)

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("") 
  const [firstname, setFirstname] = useState("")

  const [logOrReg, setLogOrReg] = useState("login")

  return (
    <div className={s.container}>
      <h2>[ Livsplaneraren ]</h2>
      <div className={s.formcontainer}>
        <div className={s.formbuttons}>
          <button className={`${s.tab} ${logOrReg === "login" ? s.active : ""}`} onClick={() => {setLogOrReg("login")}}>Logga in</button>
          <button className={`${s.tab} ${logOrReg === "register" ? s.active : ""}`} onClick={() => {setLogOrReg("register")}}>Registrera dig</button>
        </div>

        {<form>
          <label>Användarnamn</label>
          <input type="text" placeholder="Användarnamn" value={username} onChange={(e) => {setUsername(e.target.value)}}/>
          <label>Lösenord</label>
          <input type="password" placeholder="Lösenord" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
          {logOrReg === "register" ? (
            <>
              <label>Tilltalsnamn</label>
              <input type="text" placeholder="Tilltalsnamn" value={firstname} onChange={(e) => {setFirstname(e.target.value)}}/>
            </>
          ) : (
            ""
          )}

          <button onClick={(e) => {
            e.preventDefault()
            logOrReg === "register"
              ? addUser(firstname, username, password)
              : loginUser(username, password)

            setUsername("")
            setPassword("")
            setFirstname("")
          }}>
            {logOrReg === "register" ? "Registrera" : "Logga in"}
          </button>
        </form>}
      </div>
    </div>
  )
}

export default LoginPage
