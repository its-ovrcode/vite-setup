import Play from './Play';
const CourseCard = ({ profile, img, title, details }) => {
  return (
    <div className='w-[432px] h-full mb-10 flex flex-col items-center justify-center relative '>
      <div className='absolute top-0 right-36 flex gap-5 items-center justify-center'>
        <div className='scale-125'>
          <Play />
        </div>
        <button className='font-primary text-[20px]'>Start</button>
      </div>
      <div className='absolute w-[422px] h-[492px]'>
        <img src={img} alt='' />
      </div>
      <div className=' relative mt-[12vh]'>
        <img className='      w-[392px]' src={profile} alt='' />
        <div className='mt-4'>
          <h3 className='font-bold  font-sans'>
            {title} {''} :
          </h3>
          <p className='w-[382px] leading-snug text-[14px]'>{details}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
