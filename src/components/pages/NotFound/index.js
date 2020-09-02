import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="flex justify-center items-center h-64">
    <div className="text-center">
      <h1 className="h1 color-text-primary text-2xl md:text-6xl pb-5">
        404 | Not Found
      </h1>
      <Link className="shadow bg-secondary text-secondary font-bold py-2 px-4 rounded" to={"/"}>
        Go to main page
      </Link>
    </div>
  </div>
)

export default NotFound
