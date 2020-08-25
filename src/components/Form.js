import React from "react"

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      question: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setField = this.setField.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()

    console.log(this.state)
  }

  setField (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { name, email, question } = this.state

    return (
      <form
        className="w-full max-w-sm mx-auto mt-10"
        onSubmit={this.handleSubmit}
      >
        <h5 className="h5 pb-2 font-semibold text-center">You can sent question to author</h5>
        <div className="flex flex-wrap -mx-3 md:mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
              placeholder="Name"
              value={name}
              name="name"
              onChange={this.setField}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
              placeholder="Email"
              value={email}
              name="email"
              onChange={this.setField}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-3">
          <div className="w-full px-3">
            <textarea
              className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
              placeholder="Your question"
              value={question}
              name="question"
              onChange={this.setField}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-20">
            <button
              className="shadow bg-secondary text-secondary font-bold py-2 px-4 rounded"
              type="submit"
              value="Sent"
            >
              Sent
            </button>
          </div>
        </div>
      </form >
    )
  }
}

export default Form