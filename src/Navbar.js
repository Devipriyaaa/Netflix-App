import React from 'react'
import Button from './components/Button'

function Navbar() {



  return (
    <div className="flex flex-row p-5 justify-between text-xl text-red-500 items-center">
      <img className='w-20 md:w-44' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />


      <div className="hidden md:flex flex-col md:flex-row gap-5 items-center">
        <p>Home</p>
        <p>Contact</p>
        <select className="text-lg border-2 border-black text-red-500 bg-red:500 rounded-md">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Malayalam">Malayalam</option>
        </select>
        <Button title="SignUp" Link="/SignUp" />
        <Button title="SignIn" Link="/login" />
      </div>
      <div className="flex md:hidden item-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>



      </div>

    </div>


  )
}

export default Navbar