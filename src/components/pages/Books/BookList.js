import React from "react"

import Book from "./Book"

import withLoader from "../../shared/HOC/withLoader"

class BookList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.books
    }
  }

  render () {
    const { items } = this.state

    return (
      <>
        {
          items.map(item => (
            <Book
              key={item.Id}
              book={item}
            />
          ))
        }
      </>
    )
  }
}

export default withLoader(BookList)
