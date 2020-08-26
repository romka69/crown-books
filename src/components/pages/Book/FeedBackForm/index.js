import React from "react"

import Header from "./Header"
import Field from "./Field"
import Actions from "./Actions"

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
        <Header>You can write question to author</Header>
        <Wrapper>
          <Field
            placeholder="Name"
            value={name}
            name="name"
            onChange={this.setField}
          />
          <Field
            placeholder="Email"
            value={email}
            name="email"
            onChange={this.setField}
          />
        </Wrapper>
        <Wrapper>
          <div className="w-full px-3 mb-6 md:mb-0">
            <textarea
              className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
              placeholder="Your question"
              value={question}
              name="question"
              onChange={this.setField}
            />
          </div>
        </Wrapper>
        <Actions />
      </form >
    )
  }
}

export default Form

const Wrapper = ({ children }) => (
  <div className="flex flex-wrap -mx-3 md:mb-2">
    {children}
  </div>
)
