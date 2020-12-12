import React from "react"

import UserInfo from "./UserInfo"

const Header = ({ children }) => {
  return (
    <header className="flex justify-between items-center font-bold bg-gray-900 text-white py-2 px-5">
      {children}
      <UserInfo />
    </header>
  )
}

export default Header;
