/* eslint-disable no-unused-vars */
import React from 'react'

import img1 from '../assets/lws-logo-en.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <nav className='py-6'>
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          <Link to={"/"}>
            <img
              className="h-[40px]"
              src={img1}
              alt="Lws"
            />
          </Link>
          <Link className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#"
          >Get Admission</Link> 
        </div>
      </nav>

    </div>
  )
}

export default NavBar