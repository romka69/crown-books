import React from "react"

import PropTypes from "prop-types"

import Header from "./Header"
import BookCard from "./BookCard"

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

        <div style={styles.books}>
          {
            items.map(item => (
              <BookCard
                key={item.Id}
                book={item}
                removeFromRelated={this.removeFromRelated}
              />
            ))
          }
        </div>
      </>
    )
  }
}

RelatedBooks.propTypes = {
  books: PropTypes.array,
}

export default RelatedBooks;

const styles = {
  books: {
    display: "flex",
  },
}