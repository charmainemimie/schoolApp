//import React from 'react'
import { FaReact } from "react-icons/fa";
const NotesCards = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Maths */}
          <div className="max-w-sm p-6 bg-white border border-8 border-taupe rounded-3xl shadow ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                />
              </svg>
            </div>
            <a href="#">
              <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
               Mathematics
              </h5>
            </a>
            <ul className="text-center font-bold text-xl">
              <li className="py-4">Mechanics 1</li>
              <li>Pure Maths 3</li>
            </ul>
          </div>
          {/* physics */}
          <div className="max-w-sm p-6 bg-white border border-8 border-taupe rounded-3xl shadow ">
            <div className="flex items-center justify-center ">
              <FaReact style={{ fontSize: "40px" }} />
            </div>
            <a href="#">
              <h5 className="mb-2 text-3xl font-bold text-center tracking-tight text-gray-900 dark:text-white">
               Physics
              </h5>
            </a>
            <ul className="text-center font-bold text-xl">
              <li className="py-4">Analytical</li>
              <li>Theoretical</li>
            </ul>
       
          </div>
          {/* chemistry */}
          <div className="max-w-sm p-6 bg-white border border-8 border-taupe rounded-3xl shadow  ">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                />
              </svg>
            </div>

            <a href="#">
              <h5 className="mb-2 text-3xl text-center font-bold tracking-tight  dark:text-white">
               Chemistry
              </h5>
            </a>
            <ul className="text-center font-bold text-xl ">
              <li className="py-4">Inorganic</li>
              <li>Physical</li>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCards;
