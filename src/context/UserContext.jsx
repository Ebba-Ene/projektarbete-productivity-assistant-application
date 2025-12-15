import { createContext, useState } from "react"

export const UserContext = createContext()

const [userName, setUserName] = useState(null)
const [passWord, setPassWord] = useState(null)
const [firstName, setFirstName] = useState(null)
const [currentUser, setCurrentUser] = useState(null)
const [loggedIn, setLoggedIn] = useState(false)

const UserProvider = () => {
  return <UserContext value={{}}>{children}</UserContext>
}

export default UserProvider
