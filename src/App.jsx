import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from './assets/yourise.svg';
import {
  BsInstagram as Instagram,
  BsGithub as Github,
  BsTwitter as Twitter,
} from 'react-icons/bs';
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <motion.div className='bg-[#0b0b0b] h-screen  flex flex-col gap-8 items-center justify-center text-white font-sans'>
      {/* YouRise Logo Box */}
      <motion.div
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{
          scale: 0.8,
          rotate: -100,
          borderRadius: '100%',
          transition: { duration: 0.5 },
        }}
        onClick={() => setCount(count + 1)}
        className='div bg-gradient-to-tr from-[#d2c] to-[#ff579a]   cursor-pointer transition-all  ease-linear  flex rounded-2xl flex-col items-center justify-center px-8 h-32 w-32 bg-white'>
        <img className='h-18 w-18' src={logo} alt='' />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: '-40' }}
        animate={{ opacity: 1, y: 0 }}
        drag
        dragConstraints={{
          top: -40,
          left: -40,
          right: 40,
          bottom: 40,
        }}
        transition={{
          duration: 0.5,
          type: 'spring',
          // Bounce like a spring
          stiffness: 120,
          // Slowly start and end the animation
          damping: 20,
        }}
        className='font-bold flex flex-col justify-center items-center text-7xl text-transparent bg-clip-text bg-gradient-to-tr from-[#d2c] to-[#ff579a] hover:from-[#4005FF] cursor-pointer transition-all duration-1000 ease-linear hover:to-[#0191FE] '>
        YouRise Devs
        <span className='text-sm font-medium text-white'>Count : {count}</span>
      </motion.h1>
      <motion.p className='bg-gray-800 px-10 rounded-lg py-6'>
        Pre-Installed with Tailwind CSS, PostCSS, Autoprefixer,ViteJS,
        React-Icons
      </motion.p>

      <footer>
        <ul className='flex gap-6'>
          <li>
            {' '}
            <a
              target='_blank'
              href='https://www.instagram.com/yr.graphicdesigners/'>
              Instagram <Instagram />
            </a>
          </li>
          <li>
            {' '}
            <a target='_blank' href='https://twitter.com/__ovrCode__'>
              Twitter <Twitter />
            </a>
          </li>
          <li>
            {' '}
            <a target='_blank' href='https://github.com/ovr-code'>
              Github <Github />
            </a>
          </li>
        </ul>
      </footer>
    </motion.div>
  );
};

export default App;
