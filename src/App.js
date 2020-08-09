import React from "react"

import PropTypes from "prop-types"

import Header from "./components/main/Header"
import BookContainer from "./components/BookCard/BookContainer"
import AuthorList from "./components/AuthorList"
import Form from "./components/Form"
import Footer from "./components/main/Footer"

class App extends React.Component {
  render () {
    const { book: { Authors } } = this.props

    return (
      <>
        <Header>Crown-Books</Header>

        <BookContainer />

        <AuthorList authors={Authors} />

        <Form />

        <Footer>
          <div>&copy; Books crowdfunding, {new Date().getFullYear()}</div>
          <div>Training project from TN. <a href="https://github.com/romka69/crown-books" target="_blank">GitHub</a></div>
        </Footer>
      </>
    )
  }
}

App.propTypes = {
  book: PropTypes.object,
  books: PropTypes.array,
  Authors: PropTypes.object,
}

export default App;

const styles = {
  main: {
    margin: "0 auto",
    maxWidth: "910px",
  },
}
