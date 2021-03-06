import React from "react"
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from 'history'

import ThemeProvider from "./components/shared/providers/ThemeProvider"

import Layout from "./components/shared/Layout"
import Books from "./components/pages/Books"
import NewBook from "./components/pages/NewBook"
import Book from "./components/pages/Book"
import NotFound from "./components/pages/NotFound"

import { newBookPath, bookPath } from "./components/shared/helpers/routes"

const browserHistory = createBrowserHistory()

const App = (props) => {
  const history = props.history || browserHistory

  return (
    <ThemeProvider>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route
              component={Books}
              path="/"
              exact
            />
            <Route
              component={NewBook}
              path={newBookPath()}
              strict
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
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App;
