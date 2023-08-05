import React from 'react'
import Jae from "../images/Jae-profile.png";
import { TiArrowRightOutline } from 'react-icons/ti'
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white custom-title">
            Software Engineering Student @ UoA
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Hi there! im a second year software engineering student at the University of Auckland.
           My technical skills lie in Java, C, Matlab, HTMl, CSS and more.
          </p>
          <div>
            <Link to="projects" smooth duration={500} offset={-100} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursur-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ml-2">
                <TiArrowRightOutline size={18}/>
              </span>
            </Link>
          </div>
        </div>

        <div className="pl-60">
          <img src={Jae} alt="my profile" className="rounded-2xl mx-auto w-full md:full"/>
        </div>
      </div>
    </div>
  );
};

export default Home;