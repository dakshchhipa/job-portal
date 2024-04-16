import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 x-4 md:py-20 py-14">
      <h1 className="text-5xl font-bold text-primary mb-3 ">
        Find your <span className="text-blue">new job</span> today
      </h1>
      <p className="text-lg text-black/70 mb-8">
        Thousands of jobs in the computer, enginneering and technology sector
        are waiting for you.
      </p>
      <form>
        <div>
          <div className="" flex md>
            <input
              type="text"
              name="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Banner;
