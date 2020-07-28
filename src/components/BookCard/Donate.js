import React from "react"

import DonateModal from "./DonateModal"

class Donate extends React.Component {
  render () {
    return (
      <div>
        <button style={styles.action}>Donnate!</button>
        <button><DonateModal /></button>
      </div>
    )
  }
}

export default Donate

const styles = {
  action: {
    marginTop: "40px",
    minWidth: "100%",
  },
}
