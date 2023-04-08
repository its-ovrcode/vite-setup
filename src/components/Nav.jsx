import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import menuOpen from '../assets/menuOpen.svg';
import menuClose from '../assets/menuClose.svg';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { navItems } from './data';

const Nav = () => {
  const [active, setActive] = useState('');
  // This is for
  const [toggle, setToggle] = useState(false);

  // For Smooth Scrolling
  const scrollToSection = (target) => {
    const section = document.getElementById(target);
    console.log(target);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ x: '-100' }}
      animate={{ x: 0 }}
      transition={{ delay: 0, type: 'spring', stiffness: 100 }}>
      <div className='flex justify-between px-[30px] lg:px-[40px] mt-3 '>
        <div>
          <img
            onClick={() => window.scrollTo(0, 0)}
            src={logo}
            className='w-[50px] cursor-pointer'
            alt=''
          />
        </div>
        {/*Nav For Desktop  */}
        <ul className=' items-center scroll-smooth hidden lg:flex space-x-[25px] md:space-x-[75px] z-50'>
          {navItems.map((link, index) => {
            return (
              <li
                key={link.id}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.id);
                }}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } font-sans font-medium text-[16px] `}>
                <Link
                  to={link.id}
                  smooth={true}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-sans font-bold text-[16px]`}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Nav for Mobile Devices */}

        <div className='sm:hidden flex flex-1 z-50 justify-end items-center'>
          <img
            onClick={() => setToggle(!toggle)}
            src={toggle ? menuClose : menuOpen}
            alt='menu'
            className='cursor-pointer object-contain '
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-pink-400 absolute top-20 right-0 mx-4 my-2 min-w-[140px]    z-10 rounded-md  `}>
            <ul className='list-none flex justify-end items-start gap-4 flex-col'>
              {navItems.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.id);
                  }}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-sans font-medium text-[16px] `}>
                  <Link
                    to={link.id}
                    smooth={true}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.id);
                    }}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-sans font-medium text-[16px]`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Nav;
