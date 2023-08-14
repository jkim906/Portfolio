import React from 'react';
import Insurance from '../images/port/Insurance.png';
import Portfolio1 from '../images/port/PortfolioJae.png';
import Breakgame from '../images/port/Control-V.png';
import cheater from '../images/port/Cheating.png';
import EscapeRoom from '../images/port/EscapeRoom.png';


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      name: "Jaewon's Portfolio",
      src: Portfolio1,
      link: 'https://github.com/jkim906/Portfolio',

    },
    {
      id: 2,
      name: 'Breakgame',
      src: Breakgame,
      link: 'https://github.com/jkim906/Boulder-Break-Game',
    },
    {
      id: 3,
      name: 'Cheater', 
      src: cheater,
      link: 'https://github.com/jkim906/Plagiarism-and-Cheating-Monitoring-System', 
    },
    {
      id: 4,
      name: 'Insurance', 
      src: Insurance,
      link: 'https://github.com/jkim906/Jaewons-Insurance-System',
    },
    {
      id: 5,
      name: 'Escape Room Game',
      src: EscapeRoom,
      link: 'https://github.com/jkim906/Escape-room-game',
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="flex flex-col justify-center h-full">
        <div className="max-w-screen-lg p-4 mx-auto">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Check out my projects</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {projects.map(({ id, src, name, link }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg aspect-square">
              <img
                src={src}
                alt=""
                className="rounded-md w-full h-full object-cover duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 flex items-center"
                >
                  View Project
                  <span className="group-hover:rotate-90 duration-300 ml-2">
                  </span>
                </a>
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
