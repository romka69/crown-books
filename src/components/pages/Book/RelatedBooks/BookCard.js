import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import TitleRow from "./TitleRow"
import CoverBlock from "./CoverBlock"
import AuthorBlock from "./AuthorBlock"
import CloseButton from "./CloseButton"

import { truncate } from "../../../shared/helpers/truncate"
import { bookPath } from "../../../shared/helpers/routes"

const BookCard = React.memo(({ book: { Id, Title, Cover, Author }, removeFromRelated }) => {
  return (
    <div className="w-1/3 md:w-1/4 mt-1 px-3">
      <TitleRow>{truncate(Title, 14)}</TitleRow>
      {/* <TitleRow>
        <Link to={bookPath(Id)}>
          {truncate(Title, 14)}
        </Link>
      </TitleRow> */}
      <AuthorBlock author={Author} />
      <div className="flex">
        <CoverBlock url={Cover} />
        <div className="mt-1 -ml-6">
          <CloseButton
            id={Id}
            removeFromRelated={removeFromRelated}
          />
        </div>
      </div>
    </div>
  )
})

BookCard.propTypes = {
  Id: PropTypes.number,
  Title: PropTypes.string,
  Author: PropTypes.object,
}

const styles = {
  button: {
    position: "relative",
    top: "-215px",
    right: "-125px",
  },
}
export default BookCard
