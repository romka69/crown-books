import React from "react"

import withLoader from "../../../shared/HOC/withLoader"

class Select extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: props.authors
    }
  }

  render () {
    const { register, errors, name } = this.props
    const { items } = this.state

    return (
      <div
        className="w-full px-3 mb-6"
      >
        <select
          className="block w-full border rounded py-3 px-4 leading-none text-secondary bg-secondary"
          name={name}
          ref={register}
        >
          {
            items.map(item => (
              <option
                key={item.Id}
                value={item.Id}
              >
                {item.Name}
              </option>
            ))
          }
        </select>
        {errors[name] && <span className="text-red-600">{errors[name].message}</span>}
      </div >
    )
  }
}

export default withLoader(Select)