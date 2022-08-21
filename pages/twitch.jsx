import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import MinutesApp from '../public/assets/projects/WorkOutApp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={MinutesApp}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>7MinutesWorkOut App</h2>
          <h3>Kotlin , Android Studio , Coroutines , Room Database , Firebase Storage , XML</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using Kotlin and is styled with
            Xml. The application is a simple workout App that helps you in making the habit of doing exercise in just 7 minutes.
            This is a mobile responsive recreation and features
            Email/Auth for authentication. Users may choose to be
            authenticated with either a Email or a Google account. A
            few features to note with this project are Exercise just after 7 minutes using
            the Image components.
          </p>
          <a
            href='https://github.com/Bhawna1203/7MinutesWorkoutApp'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://github.com/Bhawna1203/7MinutesWorkoutApp'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-md shadow-purple-700 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Kotlin
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Android Studio
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Coroutines
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Room Database
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase Storage
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Glide
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default twitch;
