import React from "react"

class DonateButton extends React.Component {
  render () {
    return (
      <div>
        <button style={styles.action}>Donnate!</button>
      </div>
    )
  }
}

export default DonateButton

const styles = {
  action: {
    marginTop: "40px",
    minWidth: "100%",
  },
}
