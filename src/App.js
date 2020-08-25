import React from "react"

import PropTypes from "prop-types"

import ThemeProvider from "./components/shared/providers/ThemeProvider"

import Header from "./components/shared/Header"
import Container from "./components/shared/base/Container"
import Main from "./components/shared/base/Main"
import Book from "./components/pages/Book"
import Form from "./components/pages/Book/FeedBackForm"
import Footer from "./components/shared/Footer"
import ButtonScrollToTop from "./components/shared/helpers/ButtonScrollToTop"

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Header>Crown-Books</Header>
        <Container>
          <Main>
            <Book />
            <Form />
          </Main>
          <Footer>
            &copy; Books crowdfunding, {new Date().getFullYear()}
          </Footer>
        </Container>
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
