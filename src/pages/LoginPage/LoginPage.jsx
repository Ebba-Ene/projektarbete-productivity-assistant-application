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
    <>
      <h2>Inloggningssida</h2>
      <button
        onClick={() => {
          setLogOrReg("login")
        }}
      >
        Logga in
      </button>
      <button
        onClick={() => {
          setLogOrReg("register")
        }}
      >
        Registrera dig
      </button>

      {
        <form onSubmit={(e) => {e.preventDefault}}>
          <input
            type="text"
            placeholder="Användarnamn"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Lösenord"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          {logOrReg === "register" ? (
            <>
              <input
                type="text"
                placeholder="Tilltalsnamn"
                onChange={(e) => {
                  setFirstname(e.target.value)
                }}
              />
              <button onClick={() => addUser(firstname, username, password)}>
                Registrera
              </button>
            </>
          ) : (
            <button onClick={() => loginUser(username, password)}>
              Logga in
            </button>
          )}
        </form>
      }
    </>
  )
}

export default LoginPage
