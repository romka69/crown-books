import React from "react"

import ThemeProvider from "./components/shared/providers/ThemeProvider"

import Layout from "./components/shared/Layout"

class App extends React.Component {
  render () {
    return (
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    )
  }
}

export default App;
