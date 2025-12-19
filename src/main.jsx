import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EventProvider from "./context/EventContext.jsx";
import TodoProvider from "./context/TodoContext.jsx";
import HabitsProvider from "./context/HabitsContext.jsx";
import UserProvider from "./context/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <TodoProvider>
        <EventProvider>
          <HabitsProvider>
            <App />
          </HabitsProvider>
        </EventProvider>
      </TodoProvider>
    </UserProvider>
  </StrictMode>
);
