import React from "react"

import AuthContext from "../../../contexts/AuthContext"

const currentUser = {
  email: "777-vasya-777@mail.com",
  firstName: "Vasya",
  lastName: "Pupkin",
  avatarUrl: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image"
}

const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={currentUser}>
    {children}
  </AuthContext.Provider>
)

export default AuthProvider