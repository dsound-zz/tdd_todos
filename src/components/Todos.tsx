import React, { useState } from "react"

const Todos = () => {
  const [text, setText] = useState<string>("")
  const [editText, setEditText] = useState<string>("")
  const [todos, setTodos] = useState<string[] | []>([])
  const [editing, setEditing] = useState<{
    index: number | null
    isEdit: boolean
  }>({ index: null, isEdit: false })

  const handleInput = () => {
    if (text.trim() !== "") {
      setTodos([...todos, text])
      setText("")
    }
  }

  const handleEdit = (idx: number) => {
    if (editText.trim() !== "") {
      const todosCopy = [...todos]
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      todosCopy[idx] = editText
      setTodos(todosCopy)
      setEditText("")
      setEditing({ index: null, isEdit: false })
    }
  }

  const handleDelete = (idx: number) => {
    const updatedTodos = todos.filter((_, index) => idx !== index)
    setTodos(updatedTodos)
  }

  console.log(editing)
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
      <button aria-label='submit button' onClick={handleInput}>
        Submit
      </button>

      <div>
        {todos.map((todo, idx) => (
          <ol key={todo}>
            {editing.index === idx && editing.isEdit ? (
              <>
                <input
                  aria-label='edit input'
                  type='text'
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  aria-label='edit submit'
                  onClick={() => handleEdit(idx)}
                >
                  Submit
                </button>
              </>
            ) : (
              <li aria-label={todo}>
                {todo}

                <span>
                  <button
                    aria-label='edit button'
                    style={{ marginLeft: "30px" }}
                    onClick={() => {
                      setEditing({ index: idx, isEdit: true })
                      setEditText(todo)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    aria-label='delete button'
                    style={{ marginLeft: "30px" }}
                    onClick={() => handleDelete(idx)}
                  >
                    delete
                  </button>
                </span>
              </li>
            )}
          </ol>
        ))}
      </div>
    </div>
  )
}

export default Todos
