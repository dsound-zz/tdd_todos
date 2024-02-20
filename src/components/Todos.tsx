import React, { useState } from "react"

const Todos = () => {
  const [text, setText] = useState<string>("")
  const [todos, setTodos] = useState<string[] | []>([])

  const handleInput = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text])
      setText("")
    }
  }

  console.log(text)
  console.log(todos)
  return (
    <div>
      <h1>Todos</h1>
      <input
        type='text'
        aria-label='todo input'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>Submit</button>

      <div>
        {todos.map((todo) => (
          <ul key={todo}>
            <li>{todo}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Todos
