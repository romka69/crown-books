import React from "react"

import PropTypes from "prop-types"

import ThemeProvider from "./components/shared/providers/ThemeProvider"

import Layout from "./components/shared/Layout"
import Book from "./components/pages/Book"
import Form from "./components/pages/Book/FeedBackForm"
import ButtonScrollToTop from "./components/shared/helpers/ButtonScrollToTop"

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Layout>
          <Main>
            <Book />
            <Form />
          </Main>
        </Layout>
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

const Main = ({ children }) => (
  <div className="max-w-screen-lg my-0 mx-auto px-3 xl:px-0">
    {children}
  </div>
)
