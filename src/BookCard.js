import React from "react"

class BookCard extends React.Component {
  render () {
    if (!this.props.book)
      return <div>Empty book</div>

    const { book: { Title, Annotation, Pages, Language, ProgressPercent, Cover, MinPrice, DesiredPrice, CurrentSum, ExpectedPrice, Feeds } } = this.props

    return (
      <div style={styles.bookContainer}>
        <div style={styles.bookCard}>
          <img style={styles.bookCover} src={Cover} alt="" />
        </div>
        <div style={styles.description}>
          <div style={styles.title}>{Title}</div>
          {
            Feeds > 20 ?
              <div style={styles.popular}>
                Popular
              </div>
              : ""
          }
          <div style={styles.annotation}>{Annotation}</div>
          <div style={styles.character}>Pages: {Pages}</div>
          <div style={styles.character}>Language: {Language}</div>
          <div style={styles.character}>Book done is: {ProgressPercent}</div>
          <div style={styles.character}>Feeds: {Feeds}</div>
          <div style={styles.prices}>
            <div style={styles.price}>
              <div>Minimal price</div>
              <div>{MinPrice}</div>
            </div>
            <div style={styles.price}>
              <div>Desired price</div>
              <div>{DesiredPrice}</div>
            </div>
            <div style={styles.price}>
              <div>Current sum</div>
              <div>{CurrentSum}</div>
            </div>
            <div style={styles.price}>
              <div>Expected price</div>
              <div>{ExpectedPrice}</div>
            </div>
          </div>

          <div>
            <button style={styles.action}>Donnate!</button>
          </div>
        </div>

      </div>
    )
  }
}

export default BookCard

const styles = {
  bookContainer: {
    display: "flex",
  },
  bookCard: {
    width: "290px",
    minHeight: "410px",
    boxShadow: "0 0 20px #aaa",
    margin: "25px",
    padding: "10px 10px 0 10px",
    verticalAlign: "top",
  },
  bookCover: {
    height: "400px",
  },
  description: {
    margin: "25px",
  },
  title: {
    fontWeight: "800",
    fontSize: "25px",
    marginBottom: "15px",
  },
  popular: {
    fontWeight: "600",
    fontSize: "14px",
    color: "gray",
  },
  annotation: {
    marginTop: "10px",
  },
  character: {
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: "600",
  },
  prices: {
    paddingTop: "30px",
    display: "flex",
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "600",
  },
  price: {
    flex: "0 0 25%",
    maxWidth: "25%",
  },
  action: {
    marginTop: "40px",
    minWidth: "100%",
  }
}
