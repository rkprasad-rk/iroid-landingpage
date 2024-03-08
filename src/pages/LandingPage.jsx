import React from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

function LandingPage() {
  return (
    <div className=" w-full h-full -z-30 font-poppins  relative ">
      <div className="absolute w-1/3 h-96 rounded-full blur-3xl bg-[#F5C4CD] left-20 bottom-5 -z-10" />
      <div className="absolute w-1/3 h-96 rounded-full blur-3xl bg-[#F5C4CD] top-0 right-20 -z-10" />
      <div className="max-w-screen-2xl px-10 mx-auto ">
        <NavBar />
        <div className="mt-16 ">
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
