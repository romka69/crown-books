import React from "react"

import PropTypes from "prop-types"

import ThemeProvider from "./components/providers/ThemeProvider"

import Header from "./components/main/Header"
import BookContainer from "./components/BookCard/BookContainer"
import Form from "./components/Form"
import Footer from "./components/main/Footer"
import ButtonScrollToTop from "./components/helpers/ButtonScrollToTop"

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Header>Crown-Books</Header>

        <div style={styles.main} >
          <BookContainer />

          <Form />
        </div>

        <Footer>
          <div>&copy; Books crowdfunding, {new Date().getFullYear()}</div>
          <div>Training project from TN. <a href="https://github.com/romka69/crown-books" target="_blank">GitHub</a></div>
        </Footer>

        <ButtonScrollToTop />
      </ThemeProvider>
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
