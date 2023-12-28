import React, { useState } from 'react';
import logo from '../images/logo.png';
import { TbBrandGithubFilled } from 'react-icons/tb';
import { RiInstagramFill } from 'react-icons/ri';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

function Navbar({mode,setMode}) {
  
  return (
    <div className='flex justify-between px-5 md:px-10 pt-2'>
      <div className='logo flex  items-center  '>
        <a href='/'>
          <img src={logo} alt='logo' className='w-12 md:w-20 me-2' />
        </a>
        <a href='/' className={`text-lg md:text-2xl font-bold ${mode ? 'text-black': 'text-white'}`}>
          SkyTracker
        </a>
      </div>
      <div className='links flex items-center '>
        <a
          href='www.github.io'
          className={`${mode ? 'text-black': 'text-white' } p-2 md:p-3 rounded-full hover:bg-blue-600 bg-secondary`}>
          <TbBrandGithubFilled className='text-xl md:text-3xl' />
        </a>
        <a
          href='www.instagram.com'
          className={`${mode ? 'text-black': 'text-white' } bg-secondary p-2 md:p-3 rounded-full mx-3 hover:bg-blue-600`}>
          <RiInstagramFill className='text-xl md:text-3xl' />
        </a>
        <button
          className={`${
            mode ? 'bg-stone-950' : ' bg-white'
          }  hover:bg-primary p-2 md:p-3 rounded-full`}
          onClick={() => {
            setMode((pre) => !pre);
          }}
        >
          {mode ? (
            <MdDarkMode className='md:text-3xl text-xl text-white' />
          ) : (
            <MdLightMode className='text-3xl ' />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
