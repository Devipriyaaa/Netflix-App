import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
      <button className="border-2 border-white p-2 hover:bg-red-600 rounded-md">
        <Link to ={props.title}>


          {props.title}
        </Link>

      </button>

    </div>
  )
}

export default Button