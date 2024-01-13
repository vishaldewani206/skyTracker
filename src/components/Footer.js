import React from 'react';
import {motion} from 'framer-motion';
function Footer({mode}) {
   const showVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        // duration: 0.7 ,
        delay: 0.1 * i,
      },
    }),
  };
  return (
    <div className={`${mode ? 'bg-primary':'bg-absolute'}  p-10 text-white flex `}>
      <div>
        <motion.h1 
        className='text-xl mb-2' variants={showVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={1}>SkyTracker</motion.h1>
        <motion.a href='www.github.com' variants={showVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={2}>
          Github
        </motion.a>
        <br />
        <motion.a href='https://github.com/vishaldewani206' className='block mt-3 '
        variants={showVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={3}>
          Instagram
        </motion.a>
        <br />
        <motion.a href='mailto:vishaldewani164@gmail.com'
        variants={showVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={4}>Gmail</motion.a>
      </div>
      <div className='ms-auto mt-auto'>
        <p>&#169; 2023 Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
