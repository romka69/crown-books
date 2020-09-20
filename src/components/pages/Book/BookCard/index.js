import React from "react"

import PropTypes from "prop-types"

import CoverBlock from "./CoverBlock"
import Header from "./Header"
import PopularTag from "./PopularTag"
import Summary from "./Summary"
import Details from "./Details"
import Prices from "./Prices"
import UserPrice from "./UserPrice"
import DonateButton from "./DonateButton"
import DonateModal from "./DonateModal"

import withLoader from "../../../shared/HOC/withLoader"

const BookCard = ({ book }) => {
  const { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice, Feeds } = book

  if (!book)
    return <div>Empty book</div>

  return (
    <div className="md:flex py-10">
      <div className="md:w-1/3">
        <CoverBlock url={Cover} />
      </div>
      <div className="md:w-2/3 md:pl-5">
        <Header>{Title}</Header>
        <PopularTag feeds={Feeds} />
        <Summary>{Annotation}</Summary>
        <Details detailsProps={{ Pages, Language, ProgressPercent, Feeds }} />
        <Prices pricesProps={{ MinPrice, DesiredPrice, CurrentSum, ExpectedPrice }} />
        <UserPrice minPrice={MinPrice} />
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

export default withLoader(BookCard)
