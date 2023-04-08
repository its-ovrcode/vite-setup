import React from 'react';
import mouse from '../assets/white-mouse.png';
import { content } from './data';

const Learniverse = () => {
  return (
    <section id='why-us' className=' container-main'>
      <div className='border border-white rounded-md  flex justify-center gap-6 items-center flex-col lg:max-w-[1080px] h-auto p-10'>
        <div className='relative inline-block'>
          <h2 className='heading-3'>
            WHY CHOOSE <span className=' heading-pink'>LEARNIVERSE</span>
          </h2>
          <img
            className='w-[50px] absolute right-[-3vw] top-[4vh]'
            src={mouse}
            alt=''
          />
        </div>
        {/* Total Content */}
        <div className=''>
          <ul className='grid mt-10 gap-6 lg:grid-cols-2'>
            {content.map((item, index) => (
              <li key={index}>
                <div
                  className={`flex lg:flex-row flex-col gap-7 items-center hover:backdrop-blur-sm  bg-blend-saturation hover:bg-opacity-40 transition-all ease-in-out   py-6 px-10 border rounded-lg lg:w-[460px] w-auto lg:h-[140px] h-auto justify-center  text-center ${
                    item.unique == true
                      ? 'selection:bg-emerald-500 hover:bg-lightPink border-emerald-500'
                      : 'border-pink-400 hover:bg-emerald-500'
                  } `}>
                  <img
                    className='lg:w-[40px]'
                    src={item.icons}
                    alt={item.title}
                  />
                  {/* !!Content */}
                  <div className='flex lg:gap-3 gap-1 flex-col lg:items-start '>
                    <h3 className='font-sans font-semibold'>{item.title}</h3>
                    <p className='text-[12px] lg:text-left text-center  '>
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Learniverse;
