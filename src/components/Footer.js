import React from 'react';

function Footer({mode}) {
  return (
    <div className={`${mode ? 'bg-primary':'bg-absolute'}  p-10 text-white flex `}>
      <div>
        <h1 className='text-xl mb-2'>SkyTracker</h1>
        <a href='www.github.com' className=''>
          Github
        </a>
        <br />
        <a href='www.github.com' className='block mt-3 '>
          Instagram
        </a>
        <br />
        <a href='#'>Gmail</a>
      </div>
      <div className='ms-auto mt-auto'>
        <p className=''>&#169; 2023 Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
