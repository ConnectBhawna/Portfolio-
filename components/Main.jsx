import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Bhawna</span>
          </h1>
          <h1 className='py-2 text-gray-700'>Passionate Software Developer 🚀</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&#39;m focused on building Dapps using front-end web applications on Tezos Blockchain,  while
            experience in Building Native Android Apps. I&#39;m currently contributing to different Open source Projects.
          </p>
          <div className="flex items-center justify-between max-w-[430px] m-auto py-4">
            <a
              href='https://www.linkedin.com/in/bhawna-chauhan-00a32a200/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>

            <a
              href='https://twitter.com/BhawnaC18275984'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaTwitter />
              </div>
            </a>

            <a
              href='https://github.com/Bhawna1203'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
