import { createContext, useState, useEffect, use } from "react"

export const UserContext = createContext()

const UserProvider = ({ children }) => {
  
  const [userId, setUserId] = useState(JSON.parse(localStorage.getItem("userIds")) || [0])

  useEffect(() => {
    localStorage.setItem("userIds", JSON.stringify(userId))
  }, [userId])
  
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
        userId: userId[userId.length - 1],
        name,
        username,
        password,
    }
    setUsers([...users, newUser])

    let newId = userId[userId.length -1] + 1
    setUserId([...userId, newId])


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
