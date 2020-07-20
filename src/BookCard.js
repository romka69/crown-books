import React from "react"

class BookCard extends React.Component {
  render () {
    if (!this.props.book)
      return <div>Empty book</div>

    const { book: { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice } } = this.props

    return (
      <div>
        <div>{Title}</div>
        <div>{Annotation}</div>
        <div>{Pages}</div>
        <div>{Language}</div>
        <div>{ProgressPercent}</div>
        <div>
          <img src={Cover} alt="" />
        </div>
        <div>{MinPrice}</div>
        <div>{DesiredPrice}</div>
        <div>{CurrentSum}</div>
        <div>{ExpectedPrice}</div>
      </div>
    )
  }
}

export default BookCard
