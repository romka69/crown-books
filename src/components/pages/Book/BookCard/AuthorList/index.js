import React from "react"

import PropTypes from "prop-types"

import AuthorCard from "./AuthorCard"

import withLoader from "../../../../shared/HOC/withLoader"

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
      <>
        <h3 className="h3 mt-10 p-2 font-bold text-xl">
          Authors of book
        </h3>
        <div className="text-right">
          <button
            className="font-bold underline text-sm"
            onClick={() => this.toggle()}
          >
            Show all Authors
          </button>
        </div>

        {
          this.sliceAuthors()
            .map(author => (
              <AuthorCard key={author.Id} author={author} />
            ))
        }
      </>
    )
  }
}

AuthorList.propTypes = {
  author: PropTypes.shape(AuthorCard.propTypes),
}

export default withLoader(AuthorList)
