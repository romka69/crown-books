const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import AuthorCard from "../src/components/AuthorCard"

import book from "../src/data/book.json"

test("renders author in a card", () => {
  const { getByText } = render(<AuthorCard author={book.Authors[0]} />)

  expect(getByText("Mark Twain")).toBeInTheDocument()
  expect(getByText("mark-twain@yahoo.com")).toBeInTheDocument()
})

test("renders stock avatar author, when it empty", () => {
  book.Authors[0].AvatarURL = ""
  const stockURL = "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/c232a028-e829-4862-a10a-fbca6c390a7c.png"

  const { getByText } = render(<AuthorCard author={book.Authors[0]} />)

  expect(document.querySelector("img").getAttribute("src")).toBe(stockURL)
})