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

    const input = screen.getByLabelText("todo input")
    const button = screen.getByRole("button")
    fireEvent.change(input, { target: { value: "Buy Groceries" } })
    fireEvent.click(button)

    expect(screen.getByText("Buy Groceries")).toBeInTheDocument()
  })
})
