import React from 'react';
function Footer({mode}) {
  return (
    <div className={`${mode ? 'bg-primary':'bg-absolute'}  p-10 text-white flex `}>
      <div>
        <h1 
        className='text-xl mb-2'>SkyTracker</h1>
        <a href='www.github.com'>
          Github
        </a>
        <br />
        <a href='https://github.com/vishaldewani206' className='block mt-3 '>
          Instagram
        </a>
        <br />
        <a href='mailto:vishaldewani164@gmail.com'>Gmail</a>
      </div>
      <div className='ms-auto mt-auto'>
        <p>&#169; 2023 Copyright</p>
      </div>
    </div>
  );
}

export default Footer;
