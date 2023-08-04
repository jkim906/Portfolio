import React from 'react';
import Insurance from '../images/port/logo-png.png';
import Portfolio1 from '../images/port/PortfolioJae.png';
import Breakgame from '../images/port/Control-V.png';
import cheater from '../images/port/Cheating.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: Portfolio1,

    },
    {
      id: 2,
      src: Breakgame,
    },
    {
      id: 3,
      src: cheater,
    },
    {
      id: 4,
      src: Insurance,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-screen-lg p-4 mx-auto">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out my projects</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg aspect-square">
                <img
                  src={src}
                  alt=""
                  className="rounded-md w-full h-full object-cover duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
