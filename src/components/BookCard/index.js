import React from "react"

import PropTypes from "prop-types"

import CoverBlock from "./CoverBlock"
import Header from "./Header"
import PopularTag from "./PopularTag"
import Summary from "./Summary"
import Details from "./Details"
import Prices from "./Prices"
import DonateButton from "./DonateButton"
import DonateModal from "./DonateModal"

const BookCard = ({ book }) => {
  const { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice, Feeds } = book

  if (!book)
    return <div>Empty book</div>

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
    </div>
  )
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
