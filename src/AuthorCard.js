import React from "react"

class AuthorCard extends React.Component {
  render () {
    if (!this.props.author)
      return <div>Empty Author</div>

    const { author: { Name, Email, AvatarURL, Info } } = this.props

    return (
      <div>
        <div>{Name}</div>
        <div>
          <a href={"mailto:" + Email}>{Email}</a>
        </div>
        <div>
          <img src={AvatarURL} alt="" />
        </div>
        <div>{Info}</div>
      </div >
    )
  }
}

export default AuthorCard
