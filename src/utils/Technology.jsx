import React from 'react';
import { motion } from 'framer-motion';

import { heroCard, mask } from '../components/data';

const Technology = () => {
  return (
    <motion.div
      className='relative w-[300px] h-[300px]'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1.5, ease: 'easeInOut' }}>
      <motion.div className=' '>
        <img className='' src={heroCard} alt='' />
      </motion.div>
      <div className=' flex items-center justify-around font-primary text-3xl top-[14%] gap-3 left-[5%] absolute  '>
        <img className=' w-[94px] ' src={mask} alt='' />
        <h3 className='font-primary'>
          Use Newest <br /> Technology
        </h3>
      </div>
    </motion.div>
  );
};

export default Technology;
