import React from 'react'

const about = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className=" text-xl mt-20">
            My name is Jaewon Kim and im currently a second year software engineering student at the University of Auckland. 
            Most of my experience lies in Java and object-oriented programming, along with C and Matlab. However, 
            I am currently working towards learning JavaScript, CSS, and HTML through university club-provided workshops and online courses. 
            This helped me create my portfolio website (code can be found on my Github).

            </p>
            <br />
            <p className="text-xl">
            Everyone has passion, and everyone has the knowledge and ability to follow instructions. 
            What sets me apart from other candidates is my ability to think outside the box and come up with innovative ideas to be really 'different'. 
            I constantly seek my own colour, uniqueness and ways for people to think 'Oh wow! Now this is not from ChatGPT.
            Scroll below to check out my projects and skills! and feel free to contact me through the contact page down below.

            </p>
        </div>

    </div>
  )
}

export default about