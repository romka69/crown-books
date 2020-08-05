import React from "react"

import PropTypes from "prop-types"

import TitleRow from "./TitleRow"
import CoverBlock from "./CoverBlock"
import AuthorBlock from "./AuthorBlock"

class BookCard extends React.Component {
  render () {
    const { book: { Title, Cover, Author } } = this.props

    return (
      <div style={styles.book}>
        <TitleRow>{Title}</TitleRow>

        <CoverBlock url={Cover} />

        <AuthorBlock author={Author} />
      </div>

    )
  }
}

BookCard.propTypes = {
  Title: PropTypes.string,
  Author: PropTypes.object,
}

export default BookCard

const styles = {
  book: {
    paddingRight: "1em",
  },
}