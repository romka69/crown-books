import React from "react"

import PropTypes from "prop-types"

import TitleRow from "./TitleRow"
import CoverBlock from "./CoverBlock"
import AuthorBlock from "./AuthorBlock"
import CloseButton from "./CloseButton"

const BookCard = ({ book: { Id, Title, Cover, Author }, removeFromRelated }) => {
  return (
    <div style={styles.book}>
      <TitleRow>{Title}</TitleRow>

      <CoverBlock url={Cover} />

      <AuthorBlock author={Author} />

      <CloseButton id={Id} removeFromRelated={removeFromRelated} />
    </div>
  )
}

BookCard.propTypes = {
  Id: PropTypes.number,
  Title: PropTypes.string,
  Author: PropTypes.object,
}

export default BookCard

const styles = {
  book: {
    paddingRight: "1em",
  },
}