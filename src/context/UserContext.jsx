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
    } else {
      alert('Användarnamn eller lösenord är fel.')
    }
  }

  const [quote, setQuote] = useState(
    JSON.parse(sessionStorage.getItem("quote") || null)
  )

  useEffect(() => {
    sessionStorage.setItem("quote", JSON.stringify(quote))
  }, [quote])

  useEffect(() => {
    if (!currentUser) {
      setQuote(null)
      return
    }

    if (!quote) {
      const fetchQuote = async () => {
        let response = await fetch("https://dummyjson.com/quotes/random")
        let json = await response.json()
        setQuote(json)
      }

      fetchQuote()
    }
  }, [currentUser])

  const logoutUser = () => {
    sessionStorage.clear()
    setCurrentUser(null)
    setQuote(null)
  }

  return (
    <UserContext
      value={{ users, currentUser, addUser, loginUser, logoutUser, quote }}
    >
      {children}
    </UserContext>
  )
}

export default UserProvider
