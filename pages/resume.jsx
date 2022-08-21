import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const resume = () => {
  return (
    <div>
      <Head>
        <title>Clint | Resume</title>
        <meta
          name='description'
          content='I’m a Full Stack Blockchain Developer  having specializing in building Native App (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Bhawna Chauhan</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/bhawna-chauhan-00a32a200/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Bhawna1203'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Blockchain Development(Tezos) <span className='px-1'>|</span> Android Development(Kotlin) {' '}
              <span className='px-1'>|</span> Frontend(React JS)
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Blockchain Development(Tezos)</p>
            <p className='py-2'>Android Development(Kotlin)</p>
            <p>Frontend(React JS)</p>
          </div>
        </div>
        <p>
          I am Bhawna, a passionate Software Developer having experience of building freelance project on both Web and Native Android.I love to contribute in Open Source. I  have always had a knack for technology and working with computers. 

        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Android Development(Kotlin)
            <span className='px-2'>|</span> Tezos 
            <span className='px-2'>|</span>SmartPy
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> NextJS
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> Javascript
            <span className='px-2'>|</span> ReactJS
          </p>
          <p className='py-2'>
            <span className='font-bold'>Tools & Software</span>
            <span className='px-2'>|</span> Github 
            <span className='px-2'>|</span> Gitopia
            <span className='px-2'>|</span> VS Code
            <span className='px-2'>|</span> Android Studio
            <span className='px-2'>|</span> Tezos Wallet
            <span className='px-2'>|</span> StackOverFlow
          </p>
        </div>

        <div className=" items-center justify-between max-w-[430px] m-auto py-4">
            <a
              href='https://www.linkedin.com/in/bhawna-chauhan-00a32a200/'
              target='_blank'
              rel='noreferrer'
            >
              <div className=' px rounded-full shadow-lg shadow-blue-700 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <p className='text-center text-blue-700 font-size semibold'>Download The Resume</p>
              </div>
            </a>
          </div>

        
      </div> 
      </div>

  );
};

export default resume;
