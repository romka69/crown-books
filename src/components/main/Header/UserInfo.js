import React from "react"

import AuthContext from "~/AuthContext"

class UserInfo extends React.Component {
  render () {
    return (
      <AuthContext.Consumer>
        {
          ({ avatarUrl, firstName, lastName, email }) => (
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
      </AuthContext.Consumer>
    )
  }
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
