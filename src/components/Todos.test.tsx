import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Todos from "./Todos"

describe("Todos", () => {
  it("renders component", () => {
    render(<Todos />)
  })

  it("renders title", () => {
    render(<Todos />)

    const title = screen.getByText("Todos")

    expect(title).toBeInTheDocument()
  })

  it("adds a todo item", () => {
    render(<Todos />)

    const createInput = screen.getByLabelText("todo input")
    const submitButton = screen.getByLabelText("submit button")
    fireEvent.change(createInput, { target: { value: "Buy Groceries" } })
    fireEvent.click(submitButton)

    expect(screen.getByText("Buy Groceries")).toBeInTheDocument()
  })

  it("deletes a todo item", () => {
    render(<Todos />)

    // first add the item
    // get the input field
    const createInput = screen.getByLabelText("todo input")
    // get the submit button
    const submitButton = screen.getByLabelText("submit button")
    // add a value to the input by drilling down: { target: { value: "value "}}
    fireEvent.change(createInput, { target: { value: "Buy Groceries " } })
    fireEvent.click(submitButton)

    expect(screen.getByText("Buy Groceries")).toBeInTheDocument()

    // find and delete the added item "Buy Groceries"
    const todoItem = screen.getByText("Buy Groceries")
    // find delete button
    const deleteButton = screen.getByLabelText("delete button")
    // click delete button
    fireEvent.click(deleteButton)

    // expect the todo item not to be in the document
    expect(todoItem).not.toBeInTheDocument()
  })

  it("Edits a todo", () => {
    render(<Todos />)

    // first find elements and add item on screen

    // get input
    const createInput = screen.getByLabelText("todo input")
    // get the submit button
    const submitButton = screen.getByLabelText("submit button")
    // and value to input with onChange
    fireEvent.change(createInput, { target: { value: "Buy Groceries" } })
    // fire submit to add todo
    fireEvent.click(submitButton)

    expect(screen.getByText("Buy Groceries")).toBeInTheDocument()

    // get edit button
    const editButton = screen.getByLabelText("edit button")
    // fire edit button
    fireEvent.click(editButton)

    // get edit input
    const editInput = screen.getByLabelText("edit input")
    // get submit on edit input
    const editSubmit = screen.getByLabelText("edit submit")
    // change input value to new value
    fireEvent.change(editInput, { target: { input: "Buy Gas" } })
    // click submit on edit input
    fireEvent.click(editSubmit)
    // expect todo to equal new value

    expect(screen.getByText("Buy Gas")).toBeInTheDocument()
  })
})
