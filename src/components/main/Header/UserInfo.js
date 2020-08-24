import React, { useContext } from "react"

import AuthContext from "../../../contexts/AuthContext"

const UserInfo = () => {
  const { avatarUrl, firstName, lastName, email } = useContext(AuthContext)

  return (
    <div style={styles.userWrapper}>
      <div>
        <img src={avatarUrl} alt="" style={styles.img} />
      </div>
      <div>
        <span>{firstName} {lastName}</span>
      </div>
      <div>{email}</div>
    </div>
  )
}

export default UserInfo;

const styles = {
  userWrapper: {
    textAlign: "right",
    fontSize: "10px",
    marginLeft: "auto",
    marginRight: "0",
  },
  img: {
    height: "40px",
  },
}
