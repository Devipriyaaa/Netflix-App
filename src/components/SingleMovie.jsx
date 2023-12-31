import React from 'react'

const SingleMovie = ({data}) => {
  return (
    <div className="text-white text-center items-center font-bold">
        <h1>{data.title}</h1>
        <p >{data.description}</p>
        <img className="w-44"src={data.img}/>
    </div>
  )
}

export default SingleMovie