import React from "react"

class EmailRow extends React.Component {
  render () {
    return (
      <div>
        <a href={"mailto:" + this.props.children}>{this.props.children}</a>
      </div>
    )
  }
}

export default EmailRow

const styles = {
  author: {
    marginTop: "15px",
    marginBottom: "3px",
    fontSize: "20px",
    fontWeight: "600",
  },
}
