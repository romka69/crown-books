import React from "react"

import PropTypes from "prop-types"

import CoverBlock from "./BookCard/CoverBlock"
import Description from "./BookCard/Description"
import Prices from "./BookCard/Prices"
import Donate from "./BookCard/Donate"

class BookCard extends React.Component {
  render () {
    if (!this.props.book)
      return <div>Empty book</div>

    const { book: { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice, Feeds } } = this.props

    return (
      <div style={styles.bookContainer}>
        <CoverBlock url={Cover} />

        <div style={styles.description}>
          <Description descProps={{ Title, Annotation, Pages, Language, ProgressPercent, Feeds }} />

          <Prices pricesProps={{ MinPrice, DesiredPrice, CurrentSum, ExpectedPrice }} />

          <Donate />
        </div>
      </div >
    )
  }
}

BookCard.propTypes = {
  book: PropTypes.arrayOf(
    PropTypes.shape([
      CoverBlock.propTypes,
      Description.propTypes,
      Prices.propTypes,
    ])
  )
}

export default BookCard

const styles = {
  bookContainer: {
    display: "flex",
  },
  description: {
    margin: "25px",
  },
}
