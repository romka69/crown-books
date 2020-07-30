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
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Name"
          value={name}
          name="name"
          onChange={this.setField}
        /><br></br>
        <input
          placeholder="Email"
          value={email}
          name="email"
          onChange={this.setField}
        /><br></br>
        <textarea
          placeholder="Your question"
          value={question}
          name="question"
          onChange={this.setField}
        /><br></br>
        <input type="submit" value="Sent" />
      </form>
    )
  }
}

export default Form