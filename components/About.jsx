import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] font-semiBold">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / Fun Fact : Can&#39;t live without StackOverFlow
          </p>
          <p className="py-2 text-gray-600">
            I am Bhawna, a passionate Software Developer having experience of
            building freelance project on both Web and Native Android.I love to
            contribute in Open Source. I have always had a knack for technology
            and working with computers. In 2019, When I started learning C++ to
            make some minor edits on a small business Game project that I was
            doing with my friends. What I thought was just a few small edits
            turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. Then i started learning Android App development and
            completed some great freelance project in it as well using Kotlin,
            Firebase and glide etc,having around 1.5 years of experience in it.
          </p>
          <p className="py-2 text-gray-600">
          This year I get to know about Blockchain through the book “Mastering Bitcoin” , this fascinates me lot, then I started exploring and learning Web3 space. Currently learning and Building Dapps on Tezos  full time.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
