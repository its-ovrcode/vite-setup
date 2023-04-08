import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { arrow, Play, robot, man, woman, swirl, sphere, upArrow } from './data';
import Technology from '../utils/Technology';

const Hero = () => {
  return (
    <main className='container-main h-max lg:items-start'>
      <motion.h1
        className='heading-1 px-10 lg:px-0'
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0, duration: 0.5, ease: 'easeIn' }}>
        LEARNIVERSE{' '}
      </motion.h1>
      {/* //TODO => Hero Images */}
      <div className='lg:absolute relative pl-10 right-10 '>
        <div className=' flex flex-row-reverse gap-7'>
          {/* MAN Image */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.3, duration: 1.5, ease: 'easeInOut' }}
            className='MAN '>
            <img className='object-contain image  profile' src={man} alt='' />
            <img className='w-12 lg:w-30' src={upArrow} alt='' />
          </motion.div>
          {/* //? WOMAN ------- */}
          <motion.div
            className='WOMAN relative mt-20'
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}>
            <img
              className='absolute w-24 lg:w-44 top-[-18vh] left-[12vw] lg:top-[-26vh] lg:right-0'
              src={swirl}
              alt=''
            />
            {/* Sphere */}

            <div className='relative'>
              <div
                className='scale-[.45]  lg:scale-75 absolute drop-shadow-2xl
               lg:bottom-[-12rem] lg:right-[5.5rem] bottom-8 -right-6'>
                <Technology />
              </div>
              <img className='profile image  ' src={woman} alt='' />
            </div>
          </motion.div>
        </div>
      </div>
      {/* H2 Text 👇 */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.5, ease: 'easeIn' }}
        className=''>
        <motion.h2 className='heading-2 lg:-mt-4 leading-none '>
          Experience <br className='mobile-br' /> Learning Like{' '}
          <br className='mobile-br' /> Never <br className='desktop-br' />{' '}
          Before <br className='mobile-br' /> with &nbsp;
          <span className='relative  text-thePink'>
            {' '}
            <img
              className='w-16 absolute top-0 -right-10 z-[100]'
              src={arrow}
              alt=''
            />
            Learniverse{' '}
          </span>
        </motion.h2>
      </motion.div>

      {/* Two Buttons one with Pink and one Transparent */}
      <div className='mt-4 flex md:flex-row  flex-col md:space-x-4 gap-6  font-medium '>
        <button
          onClick={() => window.open('https://yourise.gumroad.com/')}
          className='bg-lightPink hover:bg-purple-800 '>
          Start Now
        </button>
        <button
          onClick={() =>
            window.open('https://www.youtube.com/watch?v=oE_DjReDoLM')
          }
          className='hover:text-slate-300'>
          <Play /> See Demo
        </button>
      </div>

      {/* //! Robot Image */}
      <div className=' lg:flex mt-20 hidden'>
        <div className='flex justify-between items-center rounded-md hover:bg-lightPink transition-all ease-in-out hover:bg-opacity-30 delay-75 cursor-pointer   border w-[468px] px-[20px] py-[14px]'>
          <div className='h-full  '>
            <img
              src={robot}
              className='object-cover h-[28vh] mt-3'
              alt='Robot Image'
            />
          </div>
          <div className='flex flex-col items-start gap-2 font-sans font-bold text-xl'>
            <p className=''>
              Upgrade Your Skills <br /> with AI Tools
            </p>
            {/* <img className='' src={stairs} alt='' /> */}
          </div>
        </div>
      </div>
      <div className='absolute lg:right-20 right-0 float-animation float-4 top-auto bottom-0'>
        <img className=' w-32' src={sphere} alt='' />
      </div>
    </main>
  );
};

export default Hero;
