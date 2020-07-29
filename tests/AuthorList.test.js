const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AuthorList from "../src/components/AuthorList"

import book from "../src/data/book.json"

test("renders authors in list", () => {
  const { getByText } = render(<AuthorList authors={book.Authors} />)

  expect(getByText(book.Authors[0].Name)).toBeInTheDocument()
  expect(getByText(book.Authors[1].Name)).toBeInTheDocument()
})

test("render empty authors in list", () => {
  const { getByText } = render(<AuthorList />)

  expect(getByText("Not have authors")).toBeInTheDocument()
})