import { createContext, useState, useEffect } from "react"

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  )

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("currentUser")) || null
  )

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  useEffect(() => {
    sessionStorage.setItem("currentUser", JSON.stringify(currentUser))
  }, [currentUser])

  const addUser = (name, username, password) => {
    const newUser = {
      userId: crypto.randomUUID(),
      name,
      username,
      password,
    }

    setUsers([...users, newUser])
  }

  const loginUser = (username, password) => {
    let loggedInUser = users.find(
      (user) => user.username === username && user.password === password
    )

    if (loggedInUser) {
      setCurrentUser(loggedInUser)
    }
  }

  const logoutUser = () => {
    sessionStorage.clear()
    setCurrentUser(null)
  }

  return (
    <UserContext value={{ users, currentUser, addUser, loginUser, logoutUser }}>
      {children}
    </UserContext>
  )
}

export default UserProvider
