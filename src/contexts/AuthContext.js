import { createContext } from "react"

const defaultValue = {
  email: "Empty Email",
  firstName: "Empty name",
  lastName: "Empty lastname",
  avatarUrl: "https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image"
}

export default createContext(defaultValue)
