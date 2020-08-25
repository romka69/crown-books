import React, { useContext } from "react"

import AuthContext from "../../../contexts/AuthContext"

const UserInfo = () => {
  const { avatarUrl, firstName, lastName, email } = useContext(AuthContext)

  return (
    <div className="text-xs text-right">
      <div className="flex justify-end">
        <img src={avatarUrl} alt={firstName} title={firstName} className="h-8" />
      </div>
      <div>
        <span>{firstName} {lastName}</span>
      </div>
      <div>{email}</div>
    </div>
  )
}

export default UserInfo
