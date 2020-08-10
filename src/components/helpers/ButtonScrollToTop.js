import React from "react"

function debounce (fn, ms) {
  let timer

  return _ => {
    clearTimeout(timer)

    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

class ButtonScrollToTop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scroll: window.pageYOffset,
      is_visible: false,
    }

    this.handleScroll = debounce(this.handleScroll.bind(this), 300)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    this.setScroll()

    if (this.state.scroll > 300) {
      this.setState({
        is_visible: true
      })
    } else {
      this.setState({
        is_visible: false
      })
    }
  }

  setScroll () {
    this.setState({
      scroll: window.pageYOffset
    })
  }

  scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { is_visible } = this.state

    return (
      <div>
        {
          is_visible && (
            <div style={styles.btn} onClick={() => this.scrollToTop()}>
              <p>^</p>
            </div>
          )
        }
      </div>
    )
  }
}

export default ButtonScrollToTop

const styles = {
  btn: {
    cursor: "pointer",
    position: "fixed",
    right: "10px",
    bottom: "30px",
    width: "45px",
    height: "45px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    borderRadius: "50%",
  },
}