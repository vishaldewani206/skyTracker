import React from 'react';
import logo from '../images/logo.png';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { RiInstagramFill } from 'react-icons/ri';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { motion } from 'framer-motion';
function Navbar({ mode, setMode }) {
  return (
    <div className='flex justify-between  pt-2'>
      <div className='logo flex  items-center  '>
        <motion.a
          initial={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.7 }}
          animate={{ scale: 1, opacity: 1, rotate: 20 }}
          href='/'
          className='w-12 md:w-20 me-2'
        >
          <img src={logo} alt='logo' />
        </motion.a>
        <motion.a
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.7 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          href='/'
          className={`text-md md:text-2xl font-bold ${
            mode ? 'text-black' : 'text-white'
          }`}
        >
          SkyTracker
        </motion.a>
      </div>
      <div className='links flex items-center '>
        <motion.a
          href='https://github.com/vishaldewani206'
          className={`${
            mode ? 'text-black' : 'text-white'
          } p-1 md:p-3 rounded-full  border-2 border-blue-600 hover:bg-transparent bg-blue-600`}
           initial={{y: -50,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.3,  }}
              animate={{y: 0,  opacity: 1,  }}
        >
          <TbBrandGithubFilled className='text-xl md:text-3xl' />
        </motion.a>
        <motion.a
          href='https://www.instagram.com/vcodes8'
          className={`${
            mode ? 'text-black' : 'text-white'
          }  p-1 md:p-3 rounded-full mx-3  border-2 border-blue-600 hover:bg-transparent bg-blue-600`}
          initial={{y: -50,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.6,  }}
              animate={{y: 0,  opacity: 1,  }}
        >
          <RiInstagramFill className='text-xl md:text-3xl' />
        </motion.a>
        <motion.button
          className={`${
            mode
              ? 'bg-stone-950 border-stone-950 text-white  hover:text-stone-950'
              : ' bg-white hover:text-white border-white'
          }  hover:bg-transparent  border-2 p-1 md:p-3 rounded-full`}
          onClick={() => {
            setMode((pre) => !pre);
          }}
          initial={{y: -50,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.9,  }}
              animate={{y: 0,  opacity: 1,  }}
        >
          {mode ? (
            <MdDarkMode className='md:text-3xl text-xl w-[1.5rem] h-[1.5rem]' />
          ) : (
            <MdLightMode className='text-3xl w-[1.5rem] h-[1.5rem]' />
          )}
        </motion.button>
      </div>
    </div>
  );
}

export default Navbar;
