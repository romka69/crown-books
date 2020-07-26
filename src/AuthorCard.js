import React from "react"

class AuthorCard extends React.Component {
  getSrc (url) {
    if (!url)
      return "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/c232a028-e829-4862-a10a-fbca6c390a7c.png"

    return url
  }

  render () {
    if (!this.props.author)
      return <div>Empty Author</div>

    const { author: { Name, Email, AvatarURL, Info } } = this.props

    return (
      <div style={styles.authorContainer}>
        <div style={styles.info}>{Info}</div>
        <div style={styles.authorCard}>
          <div style={styles.cover}>
            <img style={styles.imageCover} src={this.getSrc(AvatarURL)} alt="" />
          </div>
          <div style={styles.author}>{Name}</div>
          <div>
            <a href={"mailto:" + Email}>{Email}</a>
          </div>
        </div >
      </div>

    )
  }
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
  cover: {
    border: "2px solid gray",
    height: "230px",
    overflow: "hidden",
  },
  imageCover: {
    height: "230px",
  },
  author: {
    marginTop: "15px",
    marginBottom: "3px",
    fontSize: "20px",
    fontWeight: "600",
  },
  info: {
    marginTop: "25px",
    fontSize: "14px",
  },
}
