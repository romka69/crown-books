import React from "react"

import PropTypes from "prop-types"

import AuthorCard from "./AuthorCard"

import withLoader from "../HOC/withLoader"

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
    if (!this.props.authors || this.props.authors.length == 0)
      return <div>Not have authors</div>

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
              <AuthorCard key={author.Id} author={author} />
            ))
        }
      </div>
    )
  }
}

AuthorList.propTypes = {
  author: PropTypes.shape(AuthorCard.propTypes),
}

export default withLoader(AuthorList)

const styles = {
  action: {
    display: "flex",
    justifyContent: "flex-end",
  },
}
