import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import EventProvider from "./context/EventContext.jsx"
import TodoProvider from "./context/TodoContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
    <EventProvider>
      <App />
    </EventProvider>
    </TodoProvider>
  </StrictMode>
)
