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
        <button
          className="mt-2 md:mt-0 text-center font-bold underline py-2 px-2 text-sm"
          onClick={() => this.toogle()}
        >
          Donate info
        </button>
        {
          this.state.isOpen && ReactDom.createPortal(
            <div className="fixed w-full h-full flex justify-center items-center bg-black bg-opacity-75 inset-0">
              <div className="p-5 bg-primary text-primary rounded">
                <ul>
                  <li>Donate $15 and get book</li>
                  <li>Donate $22 and get book with autograph</li>
                  <li>Donate $30+ and get book with autograph with somethings</li>
                </ul>
                <button
                  className="mt-5 text-center shadow bg-secondary text-secondary font-bold py-1 px-2 rounded"
                  onClick={() => this.toogle()}
                >
                  Close
                </button>
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
