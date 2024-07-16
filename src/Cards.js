import React from "react";
import photo from '../src/Components/pexels-pixabay-54186.png'
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Grid from "./Grid";
import './Cards.css'
function Cards (){
    return(
<>
<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-24 mt-8 flex flex-wrap justify-center gap-6"> 
  <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img className="mx-4 mt-20" src={photo} alt="profile-picture" />
    </div>
    <div className=" text-center relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 ">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Russberry Tulip
      </h4>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      <button type="button" class="text-rose-900 bg-gradient-to-r from-pink-500 to-pink-300 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
       focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full border-x-4 border-rose-400  text-sm px-5 py-2.5 text-center me-2 mb-2 drop-shadow-2xl ">Add to your "LOVE "</button>
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 mt-2 gap-7">
      <a href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-blue-700">
        <i><CiFacebook/></i>
      </a>
      <a href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-blue-700">
        <i><SlSocialTwitter /></i>
      </a>
      <a href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-500/50">
        <i><FaInstagram /></i>
      </a>
     
    </div>
  </div>

  <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Natalie Paisley
      </h4>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        CEO / Co-Founder
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
      <a href="#facebook" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
        <i className="fab fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="#twitter" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#instagram" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  </div>

  <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie">
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Natalie Paisley
      </h4>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        CEO / Co-Founder
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
      <a href="#facebook" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
        <i className="fab fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="#twitter" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#instagram" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  </div>
  <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie"  >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <img src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
    </div>
    <div className="p-6 text-center">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Natalie Paisley
      </h4>
      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
        CEO / Co-Founder
      </p>
    </div>
    <div className="flex justify-center p-6 pt-2 gap-7">
      <a href="#facebook" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
        <i className="fab fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="#twitter" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
        <i className="fab fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#instagram" className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
        <i className="fab fa-instagram" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</div>
<Grid/>
</>

    )
}
export default Cards;