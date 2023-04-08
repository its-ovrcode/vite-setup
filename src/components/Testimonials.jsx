import React from 'react';
import student from '../assets/Student.png';
import smile from '../assets/student.webp';
import { testimonialLeft, testimonialRight } from './data';
const Testimonials = () => {
  return (
    <section id='testimonial' className='container-main gap-16'>
      {/* 3 Divisions TL , TC, TR */}
      <h2 className='heading-3'>
        WHAT DOES OUR <span className='heading-pink'>STUDENTS</span> SAY
      </h2>
      <div className='grid lg:grid-cols-3 align-middle    place-items-center  lg:gap-5 gap-10'>
        {/* Testimonial Left */}
        <div>
          <ul>
            {/* //TODO Testimonial Left on Desktop 
            and Top on Mobile Devices
            */}
            {testimonialLeft.map((testimonial, index) => {
              return (
                <li key={index} className=' float-animation float-3'>
                  <div
                    style={{
                      // Will rotate if Desktop is True
                      rotate:
                        window.innerWidth > 768 ? testimonial.rotate : '0',
                    }}
                    className='relative mb-6 uppercase scale-75 md:scale-100'>
                    <div className='h-[100px] absolute float-animation float-2 bg-white translate-y-3 rounded-full   w-[420px]'></div>
                    <div
                      style={{
                        backgroundColor: testimonial.bgColor,
                      }}
                      className={`h-[100px]  border border-white text-black font-semibold font-sans px-10 text-center relative w-[420px] rounded-full flex items-center justify-center text-[12px] `}>
                      {testimonial.description}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Testimonial Center */}
        <div className='relative'>
          <div className='absolute w-[320px] bg-pink-500 float-4 translate-y-8 rounded-md  translate-x-4 h-[420px] '></div>

          <img
            src={student}
            className=' image relative w-[320px] smile-cursor '
            alt='Student Image'
          />
        </div>
        {/* Testimonial right for Desktop
        and Bottom for Mobile Devices
        */}
        <div>
          <ul className='gap-10'>
            {testimonialRight.map((testimonial, index) => {
              return (
                <li key={index} className='float-4 float-animation'>
                  <div
                    style={{
                      // Will rotate if Desktop is True
                      rotate:
                        window.innerWidth > 768 ? testimonial.rotate : '0',
                    }}
                    className='relative mb-10 uppercase scale-75 md:scale-100'>
                    <div className='h-[100px] float-animation absolute bg-white translate-y-3 rounded-full   w-[420px]'></div>
                    <div
                      style={{
                        backgroundColor: testimonial.bgColor,
                      }}
                      className={`h-[100px]  border border-white text-black font-semibold font-sans px-10 text-center relative w-[420px] rounded-full flex items-center justify-center text-[12px] `}>
                      {testimonial.description}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
