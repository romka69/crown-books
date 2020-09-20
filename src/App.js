import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import ThemeProvider from "./components/shared/providers/ThemeProvider"

import Layout from "./components/shared/Layout"
import Books from "./components/pages/Books"
import Book from "./components/pages/Book"
import NotFound from "./components/pages/NotFound"

import { bookPath } from "./components/shared/helpers/routes"

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Router>
          <Layout>
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
          </Layout>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App;
