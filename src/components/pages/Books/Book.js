import React from "react"
import { Link } from "react-router-dom"

import PropTypes from "prop-types"

import CoverBlock from "./CoverBlock"
import TitleRow from "./TitleRow"
import AnnotationBlock from "./AnnotationBlock"
import AuthorBlock from "./AuthorBlock"

import { bookPath } from "../../shared/helpers/routes"

const Book = React.memo(({ book: { Id, Title, Annotation, Cover, Author } }) => {
  return (
    <WrapperCard>
      <CoverBlock url={Cover} title={Title} />
      <WrapperText>
        <WrapperTitleAnnotation>
          <TitleRow>
            <Link to={bookPath(Id)}>{Title}</Link>
          </TitleRow>
          <AnnotationBlock>{Annotation}</AnnotationBlock>
        </WrapperTitleAnnotation>
        <AuthorBlock>{Author.Name}</AuthorBlock>
      </WrapperText>
    </WrapperCard>
  )
})

Book.propTypes = {
  Id: PropTypes.number,
  Title: PropTypes.string,
  Author: PropTypes.object,
}

export default Book

const WrapperCard = ({ children }) => (
  <div className="shadow-lg mx-auto max-w-sm sm:max-w-full w-full sm:flex mb-5">
    {children}
  </div>
)

const WrapperText = ({ children }) => (
  <div className="w-full sm:w-3/4 p-4 flex flex-col justify-between leading-normal border-r border-b border-l sm:border-l-0 sm:border-t rounded-b sm:rounded-b-none sm:rounded-r">
    {children}
  </div>
)

const WrapperTitleAnnotation = ({ children }) => (
  <div>
    {children}
  </div>
)
