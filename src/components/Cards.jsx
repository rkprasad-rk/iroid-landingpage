import React from 'react';
import RatingCard from './RatingCard';

function Cards() {
  return (
    <section className="w-full flex items-center gap-x-5 mb-5 ">
      <div className="p-12 w-2/3  flex items-center shadow-lg backdrop-blur-sm bg-white/40  rounded-xl gap-x-5 ">
        <div className="flex flex-col  w-1/6">
          <div className=" h-28 w-24 bg-primary  rounded-2xl" />
          <p className="mt-2  text-sm font-bold">
            Lorem Ipsum Dolor Sit Amet, Consectetur
          </p>
        </div>

        <div className="flex flex-col  w-1/3">
          <div className="flex flex-col pt-4">
            <p className="text-5xl font-bold mb-6">12+</p>
            <p className="mt-2 text-left text-xs">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore
            </p>
            <div className="mt-2 flex space-x-2 text-sm">
              <p className="rounded-full border px-2 py-1">MAU</p>
              <p className="rounded-full border px-2 py-1 bg-primary text-white">
                HELLO
              </p>
              <p className="rounded-full border px-2 py-1">IPO</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3">
          <div className="flex flex-col pt-4">
            <p className="text-5xl font-bold mb-6">200+</p>
            <p className="mt-2 text-left text-xs">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore
            </p>
            <div className="mt-2 flex space-x-2 text-sm">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <RatingCard />
      </div>
    </section>
  );
}

export default Cards;
