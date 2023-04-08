import Play from '../utils/Play';
import { coursesInfo, stars, sphere } from './data';
import { motion } from 'framer-motion';

const CourseCard = ({ profile, img, title, details, imgUrl }) => {
  return (
    <div className='flex-1 relative w-[380px] md:w-[410px]  '>
      {/* Background Div  */}
      <div className='absolute bottom-0'>
        <img src={img} alt='' />
      </div>
      {/* Contents here */}
      <div className='flex w-full  px-6  pb-4 relative flex-col items-start justify-enter gap-2'>
        <img src={profile} className='object-contain image ' alt={title} />
        <h2 className='font-bold font-sans'>{title} :</h2>
        <p className='text-sm text-slate-300'>{details}</p>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section id='courses' className=' container-main'>
      <div className='flex mb-36 justify-center  lg:gap-4  items-center'>
        <h2 className='heading-3'>TRENDY COURSES</h2>
        <img className='w-[100px] absolute right-0 top-0 ' src={stars} alt='' />
      </div>
      <div
        className='flex 
       flex-col justify-center gap-6 items-end md:flex-row   '>
        {coursesInfo.map((course, index) => {
          return (
            <div key={index} className='mb-36 lg:mb-0 '>
              <CourseCard
                key={index}
                img={course.img}
                profile={course.profile}
                title={course.title}
                details={course.details}
                imgUrl={course.imgUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Courses;
