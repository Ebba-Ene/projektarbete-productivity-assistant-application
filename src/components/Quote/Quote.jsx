import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import s from "./Quote.module.css";

const Quote = () => {
  const { currentUser, quote } = useContext(UserContext);

  return (
    <div className={s.welcometext}>
      <h2>Hej {currentUser.name}!</h2>
      <p>
        <i>"{quote && quote.quote}"</i>
        <span>― {quote && quote.author}</span>
      </p>
    </div>
  );
};

export default Quote;
