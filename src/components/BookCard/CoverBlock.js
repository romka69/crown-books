import React from "react"

import PropTypes from "prop-types"

const CoverBlock = ({ url }) => {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCard}>
        <img style={styles.bookCover} src={url} alt="" />
      </div>
    </div >
  )
}

CoverBlock.propTypes = {
  url: PropTypes.string,
}

CoverBlock.defaultProps = {
  url: "https://avatars.mds.yandex.net/get-pdb/1946598/0e6b0532-257b-4a74-85ab-0e487c47c16e/s1200?webp=false",
}

export default CoverBlock

const styles = {
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
}
