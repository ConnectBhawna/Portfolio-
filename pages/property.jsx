import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import WritezImg from '../public/assets/projects/Writez.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const property = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={WritezImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Writez - A decentralized Blogging Platform</h2>
          <h3>Next JS , TailwindCSS , SmartPy , Taquito , Beacon SDk , IPFS , Flask , MySql </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React JS and Tezos Blockchain. It is a decentralized open-source social platform
            aimed to provide bloggers and writers the control and revenue they
            deserve which they are devoid of on traditional social platforms. The
            current state of web3 is mostly about decentralized finance but crypto
            mass adoption won’t be happening until we have engaging web3 social
            apps. Writez is a rich UI driven markdown based blogging platform
            where authors can also raise funds for their ideas! We are extending the
            famous crypto quote “Not your keys, not your coins” to “Not your
            keys, not your content”. The traditional blogging platforms are
            ad-driven and very much censored and hence they don’t have an open
            social-graph. With Writez, anyone can express their views anonymously
            without any censorship. There hardly is any way through which the
            readers can support the authors painlessly in web2 platforms. With
            Writez, readers can tip Tezos cryptocurrency to all posts and also fund
            the ideas of authors with just a few clicks.
          </p>
          <a
            href='https://github.com/CrackTez'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.writez.xyz/'
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
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SmartPy
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tezos
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Beacon SDK
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IPFS
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

export default property;
