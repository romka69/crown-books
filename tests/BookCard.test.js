const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import BookCard from "../src/components/BookCard"

import book from "../src/data/book.json"

test("renders book in a card", () => {
  const { getByText } = render(<BookCard book={book} />)

  expect(getByText(book.Title)).toBeInTheDocument()
});

test("render empty book in a card", () => {
  const { getByText } = render(<BookCard />)

  expect(getByText("Empty book")).toBeInTheDocument()
});