import React from "react"
import ReactDom from "react-dom"

class DonateModal extends React.Component {
  constructor(props) {
    super(props)

    this.state = { isOpen: false }
  }

  toogle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <>
        <a onClick={() => this.toogle()}>Donate info</a>
        {
          this.state.isOpen && ReactDom.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                <ul>
                  <li>Donate $15 and get book</li>
                  <li>Donate $22 and get book with autograph</li>
                  <li>Donate $30+ and get book with autograph with somethings</li>
                </ul>
                <button onClick={() => this.toogle()}>Close</button>
              </div>
            </div>,
            document.getElementById("modal-root")
          )
        }
      </>
    )
  }
}

export default DonateModal

const styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    backgroundColor: "#fff",
    padding: "10px",
  }
}