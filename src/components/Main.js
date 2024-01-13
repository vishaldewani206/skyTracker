import React, { useEffect, useState } from 'react';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { FaCloudMoon } from 'react-icons/fa6';
import { IoMdMoon } from 'react-icons/io';
import Spinner from './Spinner';
import { motion } from 'framer-motion';

let imageNum;
let week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
let time = new Date();
let hours = time.toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});
let day = week[time.getDay()];

function Main({ mode }) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const check = localStorage.getItem('data');
    if (check) {
      setLoader(true);
      setData(JSON.parse(check));
      let image = JSON.parse(check).current.condition.icon;
      imageNum = image.slice(image.lastIndexOf('/') + 1, image.length);
      setLoader(false);
    } else {
      try {
        fetch(
          `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_API_KEY_2}`
        )
          .then((res) => res.json())
          .then(async (data) => {
            const res = await fetch(
              `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${data.city.name} ${data.country.name}&days=2&aqi=no&alerts=no`
            );
            setLoader(true);
            const data_1 = await res.json();
            setLoader(false);
            setData(data_1);
            localStorage.setItem('data', JSON.stringify(data_1));
            let image = data_1.current.condition.icon;
            imageNum = image.slice(image.lastIndexOf('/') + 1, image.length);
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  return (
    <div className='flex  items-center flex-col  w-full my-4 mb-8'>
      {loader ? (
        <Spinner />
      ) : (
        <motion.div
          className={`${
            mode ? 'bg-stone-200' : 'bg-stone-900'
          } w-full rounded md:px-10 md:py-8 px-3 py-4 shadow-lg `}
           initial={{ y: -100, opacity: 0,transformOrigin: 'top' }}
          transition={{ duration: 0.7, delay: 1.7  }}
          animate={{ y: 0, opacity: 1,  }}
        >
          <motion.div
          initial={{y:-100,  opacity: 0 }}
          transition={{ duration: 0.7, delay: 2,  }}
          animate={{y: 0,  opacity: 1,  }}
           className='md:flex w-full mt-7'>
            <div className='md:w-1/2 flex justify-center md:justify-normal'>
              <img
                src={`https://cdn.weatherapi.com/weather/128x128/day/${imageNum} `}
                alt='weather'
                className=' me-4 object-contain'
              />
              <div className={`${mode ? 'text-black' : 'text-white'}`}>
                <h1 className='md:text-4xl text-3xl font-bold mb-2'>
                  {data.current.temp_c}°C / {data.current.temp_f}°F
                </h1>
                <p className='md:text-xl '>
                  Precipitation: {data.current.precip_in}%
                </p>
                <p className='md:text-xl my-1'>
                  Humidity: {data.current.humidity}%
                </p>
                <p className='md:text-xl mb-6'>
                  Wind: {data.current.wind_kph} kph
                </p>
              </div>
            </div>
            <div
              className={`${
                mode ? 'text-black' : 'text-white'
              } md:w-1/2  flex md:items-end items-center mt-4 md:mt-0 flex-col`}
            >
              <h1 className=' text-2xl font-bold'>{data.location.name}</h1>
              <p className='my-2 text-xl'>
                {day} {hours}
              </p>
              <p className='text-xl'>{data.current.condition.text}</p>
            </div>
          </motion.div>

          <div
            className={`${
              mode ? 'text-black' : 'text-white'
            } w-full grid grid-cols-2 gap-2 md:flex md:justify-evenly my-4 mt-8`}
          >
            <motion.div
              className={`md:p-4 p-1 md:px-8 ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } flex flex-col  items-center rounded-lg`}
              initial={{y: -80,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 2.3,  }}
              animate={{y: 0,  opacity: 1,  }}
          
            >
              <BsFillSunriseFill className='md:text-7xl text-5xl text-yellow-400' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Sunrise
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.sunrise}
              </p>
            </motion.div>
            <motion.div
              className={` md:p-4 p-1 md:px-8  ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              }  flex flex-col  items-center rounded-lg`}
              initial={{y: -80,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 2.6,  }}
              animate={{y: 0,  opacity: 1,  }}
            >
              <BsFillSunsetFill className='md:text-7xl text-5xl text-yellow-400' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Sunset
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.sunset}
              </p>
            </motion.div>
            <motion.div
              className={`md:p-4 p-1 md:px-8 ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } flex flex-col  items-center rounded-lg`}
               initial={{y: -80,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 2.9,  }}
              animate={{y: 0,  opacity: 1,  }}
            >
              <FaCloudMoon className='md:text-7xl text-5xl text-white' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Moonrise
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.moonrise}
              </p>
            </motion.div>
            <motion.div
              className={`${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } md:p-4 p-1 md:px-8 bg-secondary flex flex-col  items-center rounded-lg`}
               initial={{y: -80,  opacity: 0 }}
              transition={{ duration: 0.7, delay: 3.1,  }}
              animate={{y: 0,  opacity: 1,  }}
            >
              <IoMdMoon className='md:text-7xl text-5xl text-white' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Moonset
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.moonset}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Main;
