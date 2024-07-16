import React from "react";
import { Link } from "react-router-dom";
import Image from '../src/Components/logo.png'
import './App.css'
import Home from "./Home";

const navStyle = {
    background: 'transparent'
  };
function Navbar() {
return (
    <>
   <div className="flex justify-center items-center">
  <img className="h-80 w-auto" src={Image} alt="Your Company" />
</div>

<nav style={navStyle} className="px-4 sm:px-16">
  <div className="mx-auto border-double border-4 border-pink-500/50 rounded-full ">
    <div className="relative flex h-16 items-center justify-between px-4 sm:px-8">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 lg:space-x-20">
            <Link to="#" className="px-3 py-2 text-sm font-medium text-pink-500 hover:bg-pink-500 bg-rose-200/50 hover:text-white rounded-full border-none w-24 text-center">Dashboard</Link>
            <Link to="#" className="px-3 py-2 text-sm font-medium text-white-300 hover:bg-pink-500 bg-rose-200/50 hover:text-white rounded-full border-none w-24 text-center">Team</Link>
            <Link to="#" className="px-3 py-2 text-sm font-medium text-white-300 hover:bg-pink-500 bg-rose-200/50 hover:text-white rounded-full border-none w-24 text-center">Projects</Link>
            <Link to="#" className="px-3 py-2 text-sm font-medium text-white-300 hover:bg-pink-500 bg-rose-200/50 hover:text-white rounded-full border-none w-24 text-center">Calendar</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 px-8">
        <Link to="#" className="py-2 text-sm font-medium text-white-300 hover:bg-pink-500 bg-rose-200/50 hover:text-white rounded-full border-none w-24 text-center">Calendar</Link>
        <button type="button" className="relative rounded-full bg-pink-800 p-1 text-pink-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

<div className="sm:hidden" id="mobile-menu">
  <div className="space-y-1 px-2 pt-2 pb-3">
    <Link to="#" className="block px-3 py-2 text-base font-medium text-pink-500 hover:bg-pink-500 hover:text-white rounded-md">Dashboard</Link>
    <Link to="#" className="block px-3 py-2 text-base font-medium text-white-300 hover:bg-pink-500 hover:text-white rounded-md">Team</Link>
    <Link to="#" className="block px-3 py-2 text-base font-medium text-white-300 hover:bg-pink-500 hover:text-white rounded-md">Projects</Link>
    <Link to="#" className="block px-3 py-2 text-base font-medium text-white-300 hover:bg-pink-500 hover:text-white rounded-md">Calendar</Link>
  </div>
</div>
<Home/>

    </>
)
}
export default Navbar;