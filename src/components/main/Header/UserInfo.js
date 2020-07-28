import React from "react"

import AuthContext from "~/AuthContext"

class UserInfo extends React.Component {
  render () {
    return (
      <AuthContext.Consumer>
        {
          children => (
            <div style={styles.userWrapper}>
              <div>
                <img src={children.avatarUrl} alt="" style={styles.img} />
              </div>
              <div>
                <span>{children.firstName} {children.lastName}</span>
              </div>
              <div>{children.email}</div>
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
