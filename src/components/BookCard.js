import React from "react"

import PropTypes from "prop-types"

import CoverBlock from "./BookCard/CoverBlock"
import Header from "./BookCard/Header"
import PopularTag from "./BookCard/PopularTag"
import Summary from "./BookCard/Summary"
import Details from "./BookCard/Details"
import Prices from "./BookCard/Prices"
import DonateButton from "./BookCard/DonateButton"
import DonateModal from "./BookCard/DonateModal"

class BookCard extends React.Component {
  render () {
    if (!this.props.book)
      return <div>Empty book</div>

    const { book: { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice, Feeds } } = this.props

    return (
      <div style={styles.bookContainer}>
        <CoverBlock url={Cover} />

        <div style={styles.description}>
          <Header label={Title} />

          <PopularTag feeds={Feeds} />

          <Summary text={Annotation} />

          <Details detailsProps={{ Pages, Language, ProgressPercent, Feeds }} />

          <Prices pricesProps={{ MinPrice, DesiredPrice, CurrentSum, ExpectedPrice }} />

          <DonateButton />

          <DonateModal />
        </div>
      </div >
    )
  }
}

BookCard.propTypes = {
  book: PropTypes.shape({
    Cover: CoverBlock.propTypes.url,
    Title: Header.propTypes.label,
    Annotation: Summary.propTypes.text,
    Details: PropTypes.shape(Details.propTypes),
    Prices: PropTypes.shape(Prices.propTypes),
  })
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
