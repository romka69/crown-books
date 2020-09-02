import ReactDom from "react-dom"
import React from "react"

import AuthProvider from "./components/shared/providers/AuthProvider"
import App from './App'

import "./css/app.css"

ReactDom.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
)
