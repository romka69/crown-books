import ReactDom from "react-dom"
import React from "react"

import App from './App'

import "./index.css"

import book from "./book.json"

ReactDom.render(
  <App book={book} />,
  document.getElementById("root")
)
