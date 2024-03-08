import React from 'react';

function RatingCard() {
  return (
    <div className="flex flex-col bg-primary rounded-xl p-6 text-white">
      <div className="flex flex-col pt-3.5 w-3/5">
        <div className="px-2.5 py-2 w-fit bg-secondary rounded-full gap-x-1.5 flex items-center">
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="w-6"
            fill="#ffffff"
          >
            <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <p className="flex-shrink-0">Top Rated App</p>
        </div>
        <p className="text-5xl font-bold mt-11">4.8</p>
        <p className="mt-5 text-left text-xs">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
          Eiusmod Tempor Incididunt Ut Labore
        </p>
      </div>
    </div>
  );
}

export default RatingCard;
