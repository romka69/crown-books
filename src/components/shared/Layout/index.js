import React from "react"
import { Link } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import ButtonScrollToTop from "../helpers/ButtonScrollToTop"

const Layout = ({ children }) => {
  return (
    <>
      <Header><Link to="/">Crown-Books</Link></Header>
      <Wrapper>
        <Main>
          {children}
        </Main>
        <Footer>
          &copy; Books crowdfunding, {new Date().getFullYear()}
        </Footer>
        <ButtonScrollToTop />
      </Wrapper>
    </>
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
