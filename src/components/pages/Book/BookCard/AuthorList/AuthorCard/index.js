import React from "react"

import PropTypes from "prop-types"

import Summary from "./Summary"
import Cover from "./Cover"
import NameRow from "./NameRow"
import EmailRow from "./EmailRow"

class AuthorCard extends React.Component {
  render () {
    if (!this.props)
      return <div>Empty Author</div>

    const { author: { Name, Email, AvatarURL, Info } } = this.props

    return (
      <div className="flex pt-6">
        <div className="w-3/4">
          <Summary>{Info}</Summary>
        </div>
        <div className="w-1/4">
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
