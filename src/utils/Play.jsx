import React from 'react';
import play from '../assets/play.svg';
const Play = () => {
  return (
    <div className='relative'>
      <div className='absolute -inset-3 bg-white rounded-full blur-3xl'></div>

      <img
        className='relative bg-gradient-to-b e  from-lightPink to-white rounded-full w-[40px] h-[40px]  flex justify-center items-center object-cover'
        src={play}
        alt='play-button'
      />
    </div>
  );
};

export default Play;
