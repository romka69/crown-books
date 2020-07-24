import React from "react"

import AuthorCard from "./AuthorCard"

class AuthorList extends React.Component {
  constructor(props) {
    super(props)

    this.state = { showAllAuthors: false }
    this.numOfVisibleAuthors = 3
  }

  toggle () {
    this.setState({ showAllAuthors: !this.state.showAllAuthors })
  }

  sliceAuthors () {
    if (this.state.showAllAuthors)
      return this.props.authors

    return this.props.authors.slice(0, this.numOfVisibleAuthors)
  }

  render () {
    if (!this.props.authors)
      return <div>Empty Author</div>

    return (
      <div>
        <div style={styles.action}>
          <button onClick={() => this.toggle()}>
            Show all Authors
          </button>
        </div>
        {
          this.sliceAuthors()
            .map(author => (
              <div key={author.Id}>
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
  action: {
    display: "flex",
    justifyContent: "flex-end",
  },
}
