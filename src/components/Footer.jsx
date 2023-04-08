import React from 'react';
import yourise from '../assets/yourise.svg';
const Footer = () => {
  return (
    <section className='main-container'>
      <div className='flex flex-col items-center justify-center'>
        <code className='text-xl text-center text-slate-300'>
          Design & Developed with 😍 by{' '}
          <span className='cursor-pointer'>
            <br className='mobile-br' />
            <a
              className='inline'
              href='https://www.behance.net/meiyang10'
              target='_blank'>
              Yuya Mei
            </a>
          </span>{' '}
          &{' '}
          <span className='cursor-pointer'>
            <a
              className='inline'
              href='https://www.behance.net/yrdesigners'
              target='_blank'>
              Pruthviraj
            </a>
          </span>
        </code>
      </div>
    </section>
  );
};

export default Footer;
