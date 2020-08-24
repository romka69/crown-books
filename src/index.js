import ReactDom from "react-dom"
import React from "react"

import App from './App'

import "./index.css"

import AuthProvider from "./components/providers/AuthProvider"

ReactDom.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
)
