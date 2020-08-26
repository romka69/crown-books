import React from "react"

import PropTypes from "prop-types"

import Header from "./Header"
import BookCard from "./BookCard"

import withLoader from "../../../shared/HOC/withLoader"

class RelatedBooks extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.books
    }

    this.removeFromRelated = this.removeFromRelated.bind(this)
  }

  removeFromRelated (bookId) {
    this.setState((state) => ({
      items: state.items.filter(item => item.Id != bookId)
    }))
  }

  render () {
    const { items } = this.state

    if (items.length <= 0)
      return ""

    return (
      <>
        <Header>Related books</Header>
        <Wrapper>
          {
            items.map(item => (
              <BookCard
                key={item.Id}
                book={item}
                removeFromRelated={this.removeFromRelated}
              />
            ))
          }
        </Wrapper>
      </>
    )
  }
}

RelatedBooks.propTypes = {
  books: PropTypes.array,
}

export default withLoader(RelatedBooks)

const Wrapper = ({ children }) => (
  <div className="flex justify-evenly">
    {children}
  </div>
)
