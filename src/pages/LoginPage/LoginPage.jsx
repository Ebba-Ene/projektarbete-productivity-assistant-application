import { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import s from "./LoginPage.module.css"

const LoginPage = () => {
  const { currentUser, addUser, loginUser, logoutUser } =
    useContext(UserContext)

  const [userName, setUserName] = useState(null)
  const [passWord, setPassWord] = useState(null)
  const [firstName, setFirstName] = useState(null)
  const [logOrReg, setLogOrReg] = useState(null)

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
        <form>
          <input
            type="text"
            placeholder="Användarnamn"
            onChange={(e) => {
              setUserName(e.target.value)
            }}
          />
          <input
            type="password"
            placeholder="Lösenord"
            onChange={(e) => {
              setPassWord(e.target.value)
            }}
          />
          {logOrReg === "register" ? (
            <>
              <input
                type="text"
                placeholder="Tilltalsnamn"
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
              />
            </>
          ) : (
            ""
          )}

          <button
            onClick={(e) => {
              e.preventDefault()
              logOrReg === "register"
                ? addUser(firstName, userName, passWord)
                : loginUser(userName, passWord)
            }}
          >
            {logOrReg === "register" ? "Registrera" : "Logga in"}
          </button>
        </form>
      }
    </>
  )
}

export default LoginPage
