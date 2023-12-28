import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png';
import { BsFillSunriseFill, BsFillSunsetFill } from 'react-icons/bs';
import { FaCloudMoon } from 'react-icons/fa6';
import { IoMdMoon } from 'react-icons/io';
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
let hour = time.getHours() % 12 || 12;

console.log(hour);
console.log(day);
function Main({ mode }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      let response = fetch(
        'https://api.geoapify.com/v1/ipinfo?apiKey=02f21a2ba7274957915b2324663c68d9'
      )
        .then((res) => res.json())
        .then(async (data) => {
          const res = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=b8ae519e46a14d2c909154617232511&q=${data.city.name} ${data.country.name}&days=2&aqi=no&alerts=no`
          );
          const data_1 = await res.json();
          setData(data_1);
          let image = data_1.current.condition.icon;
          imageNum = image.slice(image.lastIndexOf('/') + 1, image.length);
          console.log(imageNum);
          console.log(data_1);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    imageNum && (
      <div className='flex  items-center flex-col px-5 md:px-10 w-full my-4 mb-8'>
        <div
          className={`${
            mode ? 'bg-stone-200' : 'bg-stone-900'
          } w-full rounded md:px-10 md:py-8 px-3 py-4 shadow-lg`}
        >
          <div className='md:flex w-full mt-7'>
            <div className='md:w-1/2 flex justify-center md:justify-normal'>
              <img
                src={`https://cdn.weatherapi.com/weather/128x128/day/${imageNum} `}
                alt='weather'
                className=' me-4'
              />
              <div className={`${mode ? 'text-black' : 'text-white'}`}>
                <h1 className='text-4xl font-bold'>
                  {data.current.temp_c}°C / {data.current.temp_f}°F
                </h1>
                <p className='text-xl'>
                  Precipitation: {data.current.precip_in}%
                </p>
                <p className='text-xl my-2'>
                  Humidity: {data.current.humidity}%
                </p>
                <p className='text-xl mb-6'>
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
          </div>

          <div
            className={`${
              mode ? 'text-black' : 'text-white'
            } w-full grid grid-cols-2 gap-2 md:flex md:justify-evenly my-4 mt-8`}
          >
            <div
              className={`md:p-4 p-1 md:px-8 ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } flex flex-col  items-center rounded-lg`}
            >
              <BsFillSunriseFill className='md:text-7xl text-5xl text-yellow-400' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Sunrise
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.sunrise}
              </p>
            </div>
            <div
              className={` md:p-4 p-1 md:px-8  ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              }  flex flex-col  items-center rounded-lg`}
            >
              <BsFillSunsetFill className='md:text-7xl text-5xl text-yellow-400' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Sunset
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.sunset}
              </p>
            </div>
            <div
              className={`md:p-4 p-1 md:px-8 ${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } flex flex-col  items-center rounded-lg`}
            >
              <FaCloudMoon className='md:text-7xl text-5xl text-white' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Moonrise
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.moonrise}
              </p>
            </div>
            <div
              className={`${
                mode ? 'bg-secondary' : 'bg-sky-800'
              } md:p-4 p-1 md:px-8 bg-secondary flex flex-col  items-center rounded-lg`}
            >
              <IoMdMoon className='md:text-7xl text-5xl text-white' />
              <h2 className='text-lg md:text-xl md:my-2 my-1 font-bold'>
                Moonset
              </h2>
              <p className='md:text-lg md:mb-2 '>
                {data.forecast.forecastday[0].astro.moonset}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Main;
