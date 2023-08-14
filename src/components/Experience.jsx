import React from 'react'

import html from '../images/skills/html-logo.png';
import css from '../images/skills/css-logo.png';
import javascript from '../images/skills/Exem.png';
import reactImage from '../images/skills/React-logo.png';
import Java from '../images/skills/Java-Logo.png';
import github from '../images/skills/Javascript-logo.png';
import c from '../images/skills/C-Logo.png';
import matlab from '../images/skills/Matlab_Logo.png';
import tailwind from '../images/skills/tailwind-logo.png';

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: Java,
            title: 'Java',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: c,
            title: 'C',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: matlab,
            title: 'Matlab',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: github,
            title: 'Github',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: html,
            title: 'HTML',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: css,
            title: 'CSS',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            src: reactImage,
            title: 'React',
            style: 'shadow-green-400'
        },
        {
            id: 9,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-gray-400'
        },
    ]
    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-32">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Experience </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;