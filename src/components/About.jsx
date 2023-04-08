import React from 'react';
import background from '../assets/About-bg.png';
import { barcode, downarrow, resize, strips } from './data';
import {
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiGithubLine,
} from 'react-icons/ri';
import { SiConcourse } from 'react-icons/si';
import emily from '../assets/emily.png';

const socials = [
  {
    id: 1,
    icon: <RiInstagramLine />,
    link: 'https://www.instagram.com/yr.graphicdesigners/',
  },
  {
    // Facebook
    id: 2,
    icon: <RiFacebookLine />,
    link: 'https://www.facebook.com/#/',
  },
  {
    // Twitter
    id: 3,
    icon: <RiTwitterLine />,
    link: 'https://twitter.com/__ovrCode__',
  },
  {
    // Youtube
    id: 4,
    icon: <RiYoutubeLine />,
    link: 'https://www.youtube.com/@yr.graphicdesigners',
  },
  {
    // Github
    id: 5,
    icon: <RiGithubLine />,
    link: 'https://github.com/ovr-code',
  },
];
const About = () => {
  const width = window.innerWidth;

  return (
    <div className='container-main'>
      {width > 768 ? (
        <section className='container-main'>
          {/* Where Code Starts */}
          <div className='flex flex-col items-center justify-center'>
            <div className='lg:w-[1080px] w-auto flex lg:flex-row flex-col items-center justify-center border  rounded-sm  md:min-h-[580px] relative '>
              <div
                className='lg:w-full w-[70%] flex lg:flex-col  px-12 py-6 space-y-3 about-bg  h-full bg-no-repeat
            '>
                {/* Top-section */}
                <div className='flex lg:flex-row flex-col justify-between items-center '>
                  <h2 className='text-[60px]  font-primary'>EMILY WOODS</h2>
                  <div className='flex items-end flex-col justify-center'>
                    {/* Make a straigt line */}
                    <div className='mt-6 w-[40vw] h-[2px] bg-slate-200'></div>
                    <img className='h-[40px]' src={strips} alt='' />
                  </div>
                  <img className='w-[70px]' src={resize} alt='Resize' />
                </div>
                {/* Middle Section */}
                <div className='flex lg:flex-row flex-col  items-start '>
                  <p className='lg:w-[720px]'>
                    Emily known for their innovative use of social media and
                    online platforms to engage with their fans. They use
                    interactive installations, live performances, and virtual
                    reality experiences to create immersive and unforgettable
                    experiences for their Stidemt.
                  </p>
                  <img className='w-[100px]' src={downarrow} alt='' />
                </div>
                {/* Bottom Section */}
                <div className='flex items-center justify-between '>
                  <img
                    className='h-[300px] image -ml-8  smile-cursor  w-auto'
                    src={emily}
                    alt=''
                  />
                  <div className='relative'>
                    <div className='absolute top-0 left-0 h-[200px] w-[200px] rounded-full bg-white  -inset-3 blur-3xl '></div>
                    <div className='relative h-[200px] w-[200px] flex items-center justify-center  bg-gradient-to-b e  from-lightPink to-white  rounded-full bg-dark  '>
                      <button className='font-primary text-center leading-tight text-black text-2xl'>
                        START <br /> NOW
                      </button>
                    </div>
                  </div>
                  <img className=' h-[300px]' src={barcode} alt='' />
                </div>
                {/* Social Media Section */}
                <div className='flex items-center justify-start gap-0   mt-6'>
                  <ul className=' flex bg-dark  p-2 rounded-sm  gap-4'>
                    {socials.map((social, index) => (
                      <li key={index}>
                        <a
                          className='w-[32px]'
                          target='_blank'
                          href={social.link}>
                          {social.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='bg-lightPink p-2 rounded-sm '>
                    <a href=''>
                      <SiConcourse />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className='px-30  min-h-screen'>
          <div className='border py-4 about-bg min-h-[600px] px-4 flex flex-col justify-center items-start  '>
            <h2 className='heading-3 '>EMILY WOODS</h2>
            <div className='flex mt-2 items-start gap-3 justify-end'>
              {/* Line + Strip + Resize */}
              <div className='flex gap-3  flex-col items-end justify-end'>
                <div
                  className='line bg-white w-[315px] 
            h-[1.5px]'></div>
                <img className='h-8 w-auto' src={strips} alt='' />
              </div>
              {/* Resize */}
              <div className='flex-1'>
                <img className='h-[60px] w-[60px]' src={resize} alt='' />
                {/* ---------- */}
              </div>
            </div>
            {/* Paragraph */}
            <div>
              <p className='text-justify'>
                Emily known for their innovative use of social media and online
                platforms to engage with their fans. They use interactive
                installations, live performances, and virtual reality
                experiences to create immersive and unforgettable experiences
                for their Stidemt.
              </p>
            </div>
            {/* Photo/Avatar */}
            <div className='flex flex-col gap-6 mt-4 items-center justify-center '>
              <img src={emily} className='bg-contain' alt='' />
              {/* StartNow/Button */}
              <div className='relative'>
                <div className='absolute -top-4 -left-4 h-[200px] w-[200px] rounded-full bg-opacity-50 bg-white scale-75  -inset-3 blur-3xl '></div>
                <div className='relative h-[120px] w-[120px] flex items-center justify-center  bg-gradient-to-b e  from-lightPink to-white  rounded-full bg-dark  '>
                  <button className='font-primary text-center leading-tight text-black text-2xl'>
                    START <br /> NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* for mobile */}
    </div>
  );
};

export default About;
