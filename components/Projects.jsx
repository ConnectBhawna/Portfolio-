import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import WritezImg from '../public/assets/projects/Writez.png';
import DigitalImg from '../public/assets/projects/digiManager.png';
import KidsImg from '../public/assets/projects/KidsDrawHub.png';
import HappyPlace from '../public/assets/projects/happyPlace.png';
import MinutesApp from '../public/assets/projects/WorkOutApp.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Writez'
            backgroundImg={WritezImg}
            projectUrl='/property'
            tech='Next JS, TailwindCSS, Tezos, SmartPy, Taquito ,Beacon SDK '
          />
          <ProjectItem
            title='DigiManager'
            backgroundImg={DigitalImg}
            projectUrl='/crypto'
            tech='Kotlin, Android Studio, Firebase Storage, Xml, Json, Retrofit'

          />
          <ProjectItem
            title='KidsDrawHub'
            backgroundImg={KidsImg}
            projectUrl='/netflix'
            tech='Kotlin, Android Studio, Coroutines, Xml, Glide, Firebase Storage '

          />
          <ProjectItem
            title='7MinutesWorkOut App'
            backgroundImg={MinutesApp}
            projectUrl='/twitch'
            tech='Kotlin, Android Studio,Coroutines, Xml, Google Api, Firebase Storage '

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
