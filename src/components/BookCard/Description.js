import React from "react"

import PropTypes from "prop-types"

import Popular from "./Popular"

class Description extends React.Component {
  render () {
    const { descProps: { Title, Annotation, Pages, Language, ProgressPercent, Feeds } } = this.props

    return (
      <>
        <div style={styles.title}>{Title}</div>
        <Popular feeds={Feeds} />
        <div style={styles.annotation}>{Annotation}</div>
        <div style={styles.character}>Pages: {Pages}</div>
        <div style={styles.character}>Language: {Language}</div>
        <div style={styles.character}>Book done is: {ProgressPercent}</div>
        <div style={styles.character}>Feeds: {Feeds}</div>
      </>
    )
  }
}

Description.propTypes = {
  Title: PropTypes.string,
  Feeds: PropTypes.arrayOf(Popular.propTypes),
  Annotation: PropTypes.string,
  Pages: PropTypes.string,
  Language: PropTypes.string,
  ProgressPercent: PropTypes.string,
}

Description.defaultProps = {
  Title: "Book Title",
  Annotation: "Book Annotation",
  Pages: "10",
  Language: "En",
  ProgressPercent: "0%",
}

export default Description

const styles = {
  title: {
    fontWeight: "800",
    fontSize: "25px",
    marginBottom: "15px",
  },
  annotation: {
    marginTop: "10px",
  },
  character: {
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },
}
