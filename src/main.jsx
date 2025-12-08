import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import TodoProvider from "./context/TodoContext.jsx"
import HabitsProvider from "./context/HabitsContext.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </TodoProvider>
  </StrictMode>
)
