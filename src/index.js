import ReactDom from "react-dom"
import React from "react"

import App from './App'

import "./index.css"

import AuthContext from "../AuthContext"

const currentUser = {
  email: "777-vasya-777@mail.com",
  firstName: "Vasya",
  lastName: "Pupkin",
  avatarUrl: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image"
}

ReactDom.render(
  <AuthContext.Provider value={currentUser}>
    <App />
  </AuthContext.Provider>,
  document.getElementById("root")
)
