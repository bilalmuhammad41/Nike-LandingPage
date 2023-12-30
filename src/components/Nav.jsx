import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks } from '../constants'

const Nav = () => {
  return (
    <header className='w-full padding-x absolute z-10 py-8'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="" />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="" height={25} width={25}/>
        </div>
      </nav>
    </header>
  )
}

export default Nav