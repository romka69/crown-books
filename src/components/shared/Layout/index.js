import React from "react"

import Header from "./Header"
import Footer from "./Footer"

const Container = ({ children }) => {
  return (
    <>
      <Header>Crown-Books</Header>
      <div className="text-primary bg-primary">
        {children}
        <Footer>
          &copy; Books crowdfunding, {new Date().getFullYear()}
        </Footer>
      </div>
    </>
  )
}

export default Container