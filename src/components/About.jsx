import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-gray-100 mb-4">
          I am Rafsan Ahmed Raj, living in Sylhet. I completed my Bachelor of
          Business Administration (BBA) with a major in Accounting from
          Bangladesh University of Professionals (2018 – 2021).
        </p>
        <p className="text-gray-200">
          I am passionate about web development and always eager to learn and
          explore new technologies to build efficient and scalable solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
