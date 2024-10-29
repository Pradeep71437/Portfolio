import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from "../constants";
import { logo, menu, close} from '../assets';
import { div } from 'framer-motion/client';

const Navbar = () => {

  const [active, setActive] = useState(' ')
  const [toggle, setToggle] = useState(false);
  

  return (
    <nav className={`${styles.paddingX} w-full  flex items-center py-5 fixed top-0 z-20 backdrop-blur-sm `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='' 
        onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className='w-[250px] lg:w-[300px] h-9 lg:h-auto object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className=' hidden sm:flex'>
        <a href="https://github.com/Pradeep71437" className='px-5 lg:px-7 py-2 border-2 border-purple-700 rounded-full lg:text-[18px]'>Github</a>
        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[22px] h-[22px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 shadow-sm right-0 mx-4 my-2 min-w-[200px]   z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-start items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>

              ))}
           <a href="https://github.com/Pradeep71437" className='px-5 lg:px-7 py-2  bg-purple-700 rounded-full w-full lg:text-[18px]'>Github</a>

            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar