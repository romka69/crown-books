import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"

import Header from "./Header"
import Book from "../../pages/Book"
import Books from "../../pages/Books"
import NotFound from "../../pages/NotFound"
import Footer from "./Footer"
import ButtonScrollToTop from "../helpers/ButtonScrollToTop"

import { bookPath } from "../helpers/routes"

const Layout = () => {
  return (
    <Router>
      <Header><Link to="/">Crown-Books</Link></Header>
      <Wrapper>
        <Main>
          <Switch>
            <Route
              component={Books}
              path="/"
              exact
            />
            <Route
              component={Book}
              path={bookPath()}
              strict
              exact
            />
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer>
          &copy; Books crowdfunding, {new Date().getFullYear()}
        </Footer>
        <ButtonScrollToTop />
      </Wrapper>
    </Router>
  )
}

export default Layout

const Wrapper = ({ children }) => (
  <div className="text-primary bg-primary h-full">
    {children}
  </div>
)

const Main = ({ children }) => (
  <div className="max-w-screen-lg my-0 mx-auto px-3 xl:px-0">
    {children}
  </div>
)
