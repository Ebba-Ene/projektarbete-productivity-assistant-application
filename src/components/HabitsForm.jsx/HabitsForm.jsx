import { useState } from "react"
const HabitsForm = () => {
  const [priority, setPriority] = useState(null)
  const [reps, setReps] = useState(null)
  const [title, setTitle] = useState(null)
  return (
    <>
      <h1>HabitsForm component</h1>
      <h2>Skapa upp en ny vana:</h2>
      <label htmlFor="title">Titel:</label>
      <input
        type="text"
        name="title"
        id="title"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <label htmlFor="repetitions">Repetitioner:</label>
      <input
        type="number"
        name="repetitions"
        id="repetitions"
        onChange={(e) => {
          setReps(e.target.value)
        }}
      />
      <label htmlFor="priority">Prioriteringsnivå:</label>
      <select
        name="priority"
        id="priority"
        onChange={(e) => setPriority(e.target.value)}
      >
        Välj prioritet
        <option value="">Välj prioriteringsnivå</option>
        <option value="låg">Låg</option>
        <option value="medel">Medel</option>
        <option value="hög">Hög</option>
      </select>
      <button
        onClick={() => {
          console.log(`prio, reps och title är : ${title} ${reps} ${priority}`)
        }}
      >
        Lägg till vana
      </button>
    </>
  )
}
export default HabitsForm
