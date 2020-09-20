import React from "react"

import PropTypes from "prop-types"

import Row from "./Row"

const Details = ({ detailsProps }) => {
  const { Pages, Language, ProgressPercent, Feeds } = detailsProps

  return (
    <>
      <Row>Pages: {Pages}</Row>
      <Row>Language: {Language}</Row>
      <Row>Book done is: {ProgressPercent}%</Row>
      <Row>Feeds: {Feeds}</Row>
    </>
  )
}


Details.propTypes = {
  Pages: PropTypes.string,
  Language: PropTypes.string,
  ProgressPercent: PropTypes.string,
  Feeds: PropTypes.string,
}

Details.defaultProps = {
  Pages: "Empty pages",
  Language: "Empty language",
  ProgressPercent: "Empty progress",
  Feeds: "Empty feeds"
}

export default Details
