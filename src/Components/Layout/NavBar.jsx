//import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

const NavBar = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div>
          {" "}
          <img
            src="https://i.ibb.co/dB6HKPQ/logo-removebg-preview.png"
            className=" pl-4 pt-4" style={{width:'200px',height:'120px'}}
            alt="logo"
          />{" "}
        </div>
        <div className="pt-6">
          <Navbar
            fluid
            rounded
            className="bg-gradient-to-b from-[#B2997C] to-gray-500 py-4 "
          >
            <Navbar.Brand to=""></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Link className="pr-12" to="/home">
                Home
              </Link>
              <Link className="pr-12" to="/notes">
                Notes
              </Link>
              <Link className="pr-12" to="/assignments">
                Assignments
              </Link>
              <Link className="pr-12" to="/tutorials">
                Tutorials
              </Link>
              <Link className="pr-12" to="/calendar">
                Calendar
              </Link>
              <Link className="pr-12" to="settings">
                Settings
              </Link>
              <Link className="pr-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
