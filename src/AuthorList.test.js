const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AuthorList from "./AuthorList"

import book from "./book.json"

test("renders authors in list", () => {
  const { getByText } = render(<AuthorList authors={book.Authors} />)

  expect(getByText("Mark Twain")).toBeInTheDocument()
  expect(getByText("Terry Pratchett")).toBeInTheDocument()
})

test("render empty authors in list", () => {
  const { getByText } = render(<AuthorList />)

  expect(getByText("Not have authors")).toBeInTheDocument()
})
