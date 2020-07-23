import React from "react"

import AuthorCard from "./AuthorCard"

class AuthorList extends React.Component {
  render () {
    if (!this.props.authors)
      return <div>Empty Author</div>

    return (
      <div>
        {
          this.props.authors
            .map(author => (
              <div key={author.Id} style={styles.item}>
                <AuthorCard author={author} />
              </div>
            ))
        }
      </div>

    )
  }
}

export default AuthorList

const styles = {

}
