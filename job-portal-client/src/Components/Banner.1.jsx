import React from "react";
import { FiSearch } from "react-icons/fi";

export const Banner = (Query, handleInputChange) => {
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
          <div className="flex md:rounded-s-md rounded shadow-sm ring-inset focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              name="title"
              placeholder="What position are you looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={Query}
            ></input>
            <FiSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
        </div>
      </form>
    </div>
  );
};
