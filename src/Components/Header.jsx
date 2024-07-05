import React from 'react'
import { NavLink,Link } from 'react-router-dom'
const Header = () => {
  return (
     
    <header className='flex justify-between bg-white text-black fixed top-0 left-0 w-full z-50 p-4'>
    <a href="#">Logo</a>
    <nav>
       <ul className='flex space-x-7 p-2 '>
        {/* Link is basically plays the part of anchor tag. its requires href to complete the anchor tag. for that purpose we use "to" */}
         <li><NavLink to="/">HOME</NavLink></li>
         {/* <li><NavLink to= "/AboutUs">AboutUs</NavLink></li> */}
         <li><NavLink to = "/Product">PRODUCTS</NavLink></li>
         <li><NavLink to = "/Category">CATEGORY</NavLink></li>
         <li><NavLink to = "/SignUp">SIGNUP</NavLink></li>
          <li><NavLink to = "/SignIn">SIGNIN</NavLink></li>
       </ul>
        
    </nav>
    </header>
  )
}

export default Header
