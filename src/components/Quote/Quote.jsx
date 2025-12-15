import { useContext } from "react"
import { UserContext } from "../../context/UserContext"

const Quote = () => {
  const { currentUser, quote } = useContext(UserContext)

  return (
    <div>
      <h2>Hej {currentUser.name}!</h2>
      <p>
        <i>"{quote && quote.quote}"</i> ― {quote && quote.author}
      </p>
    </div>
  )
}
export default Quote
