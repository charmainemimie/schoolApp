//import React from 'react';
import { FaReact } from 'react-icons/fa';

const NotesCards = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Maths */}
        <div className="max-w-sm px-10 bg-white border border-8 border-taupe rounded-3xl shadow">
          <div className="flex items-center justify-center">
           <a href=""> <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10 text-black "
            >
              {/* Your SVG Path */}
            </svg></a>
          </div>
          <a href="#">
            <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Mathematics
            </h5>
          </a>
          <ul className="text-center font-bold text-xl text-black pb-4">
            <li className="py-4">Mechanics 1</li>
            <li>Pure Maths 3</li>
          </ul>
        </div>

        {/* Physics */}
        <div className="max-w-sm px-10 bg-white border border-8 border-taupe rounded-3xl shadow">
          <div className="flex items-center justify-center">
            <FaReact style={{ fontSize: '40px' }} />
          </div>
          <a href="#">
            <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Physics
            </h5>
          </a>
          <ul className="text-center font-bold text-xl text-black pb-4">
            <li className="py-4">Analytical</li>
            <li>Theoretical</li>
          </ul>
        </div>

        {/* Chemistry */}
        <div className="max-w-sm px-10 bg-white border border-8 border-taupe rounded-3xl shadow">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              {/* Your SVG Path */}
            </svg>
          </div>
          <a href="#">
            <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
              Chemistry
            </h5>
          </a>
          <ul className="text-center font-bold text-xl text-black pb-4">
            <li className="py-4">Inorganic</li>
            <li>Physical</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotesCards;
