import React, { useState } from 'react'

const SampleForm = () => {
    const [Addvalue, setAddvalue] = useState("")
    const [Addword, setAddword] = useState([])

    const myfun = (e) => {
        e.preventDefault()
        setAddword([...Addword, Addvalue])
        setAddvalue("")

    }

    return (
        <div className="text-white text-2xl">
            <form>
                <input onChange={(event) => { setAddvalue(event.target.value) }} value={Addvalue} className="text-black" type="text" />
                <button onClick={myfun} className="border-2 mx-2 text-2xl" >
                    submit
                </button>
                {
                    Addword.map((data) => (
                        <p> {data}</p>
                    ))
                }

            </form>
        </div>
    )
}

export default SampleForm