import React from "react";
import chef_Table from "../assets/portfolio/screencapture-chef-s-table-vercel-app-2025-01-15-09_41_11.png";
import Cooking from "../assets/portfolio/screencapture-cooking-recipe-six-vercel-app-2025-01-15-09_42_22.png";
import OPenSource from "../assets/portfolio/screencapture-reactive-accelarator-vercel-app-2025-01-15-09_48_10.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chef_Table,
      demoLink: "https://chef-s-table.vercel.app/",
      codeLink: "https://github.com/Rafsan12/chef-s-Table",
    },
    {
      id: 2,
      src: Cooking,
      demoLink: "https://cooking-recipe-six.vercel.app/",
      codeLink: "https://github.com/Rafsan12/Cooking_Recipe",
    },
    {
      id: 3,
      src: OPenSource,
      demoLink: "https://reactive-accelarator.vercel.app/",
      codeLink: "https://github.com/Rafsan12/reactive-accelarator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md" />
              <div className="flex items-center justify-center">
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-blue-500 text-white rounded"
                >
                  Demo
                </a>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center bg-green-500 text-white rounded"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
