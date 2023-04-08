import React, { useState } from 'react';
import { motion } from 'framer-motion';

import {
  card,
  contentCenter,
  creativeGlobe,
  mobile,
  star,
  community,
  stats,
} from './data';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const width = window.innerWidth;
const Learn = () => {
  return (
    <motion.div className='container-main background-img bg-center py-10  '>
      <motion.div
        initial={{
          opacity: 0,
          y: 1000,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.5,
          type: 'spring',
          stiffness: 100,
          damping: 20,
        }}
        className='min-h-screen relative    gap-6 w-full flex flex-col justify-center items-center'>
        <div>
          <h2 className='heading-3 '>
            LEARN FROM CREATIVE <span className='text-thePink'>EXPERTS</span>
          </h2>
        </div>
        <img
          className='absolute float-animation  float-2 z-50 lg:top-[-6vh] lg:right-48 top-10 left-0'
          src={creativeGlobe}
          alt=''
        />
        <motion.div
          className='relative  flex flex-col items-center justify-center'
          variants={container}
          initial='hidden'
          animate='visible'>
          <motion.div
            className='lg:w-[920px] w-[330px]  lg:flex lg:h-auto h-[560px] lg:rounded-md  rounded-3xl object-cover'
            variants={item}
            whileInView={item.visible}>
            {width > 768 ? (
              <img
                className='lg:w-[920px] w-[330px]  lg:flex lg:h-auto h-[560px] lg:rounded-md  rounded-3xl object-cover'
                src={card}
                alt=''
              />
            ) : (
              ''
            )}
          </motion.div>
          <motion.img
            variants={item}
            className='absolute float-animation float-4  lg:z-[100] lg:w-[160px] lg:left-0 '
            src={mobile}
            alt=''
          />
          {width > 768 ? (
            <motion.div
              variants={item}
              className='  md:absolute z-50 w-[720px] top-4 right-24  '>
              {' '}
              <motion.img
                onDrag={true}
                dragConstraints={{ left: 10, right: 10, top: 10, bottom: 0 }}
                // more dragging features
                onTap={() => {
                  // Decrease size / Scale
                  window.open('https://www.youtube.com/watch?v=1Q8fG0TtVAY');
                }}
                className='object-cover image  bottom float-animation float-1 '
                src={contentCenter}
                alt=''
              />
            </motion.div>
          ) : (
            ''
          )}
          <motion.img
            variants={item}
            className='absolute float-animation float-2 z-50 w-[40px] left-10 bottom-[10vh] '
            src={star}
            alt=''
          />
          <motion.img
            variants={item}
            className='absolute float-animation float-3 z-50 h-[80px]  right-[-7vw] top-[22vh] '
            src={community}
            alt=''
          />
          <motion.img
            variants={item}
            className='absolute z-50 float-animation float-4 h-[120px]  right-[0vw] bottom-[12vh] '
            src={stats}
            alt=''
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Learn;
