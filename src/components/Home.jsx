import React from 'react'
import Jae from "../images/Jae.jpeg";
import { TiArrowRightOutline } from 'react-icons/ti'

const Home = () => {
  return (
    <div name="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex-col items-center justify-center h-full px-4 md:flex-row">
        <div>
          <h2>
            I'm a full Stack Developer
          </h2>
          <p>
            I'm a full stack developer with a passion for creating beautiful, responsive, and functional websites. I have experience in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and more.
          </p>
        <div>
        <button>
          Portfolio
          <span>
            <TiArrowRightOutline />
          </span>
        </button>
      </div>
    </div>

    <div>
      <img src={Jae} alt="my profile" />
    </div>
    </div>
    </div>
  );
};

export default Home;