import React,{useEffect, useState} from 'react'
import Movie from './Movie'

const MovieRow = () => {

    const [data,setData]=useState([])

useEffect(() =>{
    console.log("helloWorld")
    fetch('https://6591303d8cbbf8afa96bf40d.mockapi.io/animals')
    .then((Response)=>Response.json())
    .then((res1)=>{
        console.log(res1)
        setData(res1)
    })
})


    return (
        <div>
            {/* title */}
            <div className="text-white text-3xl font-bold ">
                Catogery Name
            </div>
            {/* cards */}
            <div className="flex gap-5 py-6">

                <Movie heading="movie 1" />
            </div>
            {
                data.map((item) => (
                    <Movie data={item} />
                ))

            }

        </div>
    )
}

export default MovieRow