import React from "react"

import PropTypes from "prop-types"
import Summary from "./Summary"
import Cover from "./Cover"
import NameRow from "./NameRow"
import EmailRow from "./NameRow"

class AuthorCard extends React.Component {
  render () {
    if (!this.props)
      return <div>Empty Author</div>

    const { author: { Name, Email, AvatarURL, Info } } = this.props

    return (
      <div style={styles.authorContainer}>
        <Summary>{Info}</Summary>

        <div style={styles.authorCard}>
          <Cover url={AvatarURL} />

          <NameRow>{Name}</NameRow>

          <EmailRow>{Email}</EmailRow>
        </div >
      </div>

    )
  }
}

AuthorCard.propTypes = {
  Name: PropTypes.string,
  Email: PropTypes.string,
  AvatarURL: Cover.propTypes.url,
  Info: PropTypes.string,
}

AuthorCard.defaultProps = {
  Name: "Empty name",
  Email: "Empty email",
  Info: "Empty info",
}

export default AuthorCard

const styles = {
  authorContainer: {
    paddingTop: "20px",
    display: "flex",
  },
  authorCard: {
    width: "168px",
    minHeight: "320px",
    boxShadow: "0 0 20px #aaa",
    margin: "25px",
    padding: "10px 10px 0 10px",
    verticalAlign: "top",
  },
}
