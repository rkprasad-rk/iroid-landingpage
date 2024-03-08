import React from 'react';
import Cards from './Cards';

function Hero() {
  return (
    <div className="flex flex-col items-start pt-12">
      <h1 className="text-8xl font-extrabold">
        Your
        <img
          className="inline-block h-16 w-16 rounded-full mx-2  -mt-10 ring-2 ring-primary "
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <img
          className="inline-block h-16 w-16 rounded-full mx-2 -mb-2.5 ring-2 ring-primary "
          src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        Personalized AI For Mindfulness
      </h1>
      <div className="flex items-center gap-x-10 my-14 ">
        <h4 className="font-bold">
          Neuroscience-backed <br />
          Mindfulness
        </h4>
        <p className="">
          Embark on a Journey Towards <br />
          Inner Space, Balance, And Self-
          <br />
          Discovery
        </p>
        <button
          type="button"
          className="bg-primary flex items-center gap-x-5 px-5 py-2 rounded-full border text-white "
        >
          <p className="flex-shrink-0"> Get the App</p>

          <svg
            className="w-7 "
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
          </svg>
        </button>
      </div>
      <Cards />
    </div>
  );
}

export default Hero;
