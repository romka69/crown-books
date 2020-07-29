const { TestScheduler } = require("jest")

import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import UserInfo from "../src/components/main/Header/UserInfo"

import AuthContext from "../AuthContext"

test('User shows default value', () => {
  const { getByText } = render(<UserInfo />)

  expect(getByText("Empty Email")).toBeInTheDocument()
})

test('User shows value from provider', () => {
  const currentUser = {
    email: "777-vasya-777@mail.com",
    firstName: "Vasya",
    lastName: "Pupkin",
    avatarUrl: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image"
  }

  const tree = (
    <AuthContext.Provider value={currentUser}>
      <UserInfo />
    </AuthContext.Provider>
  )
  const { getByText } = render(tree)

  expect(getByText(currentUser.email)).toBeInTheDocument()
})
