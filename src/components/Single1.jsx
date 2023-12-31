import React from 'react'
import SingleMovie from './SingleMovie'

const Single1 = ({arraytotmovie}) => {



    


    return (
        <div>
            {/* title */}
            <div className="text-white text-4xl font-bold gap-5 py-4">
                Category Movie
            </div>
            {/* cards */}
            <div className="flex flex-row gap-5">

                {
                    arraytotmovie.map((a)=>(
                        <SingleMovie data={a} />
                    ))
                }

                {/* <SingleMovie /> */}





            </div>

        </div>
    )
}

export default Single1