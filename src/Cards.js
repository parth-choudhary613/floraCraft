import React from "react";
import { motion } from "framer-motion";
import photo1 from '../src/Components/homie1.png'
import photo2 from '../src/Components/homie2.png'
import photo3 from '../src/Components/homie3.png'
import photo4 from '../src/Components/homie4.png'
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import Grid from "./Grid";
import {fadeIn} from '../src/varients';
import './Cards.css'
function Cards (){
    return(
<>
<div className=" mx-4 sm:mx-6 md:mx-8 lg:mx-24 mt-8 flex flex-wrap justify-center gap-6"> 
{/* <BorderBeam size={250} duration={12} delay={9} /> */}
<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
  <motion.div 
   variants={fadeIn("right", 0.4)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.3 }}
  
  className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <motion.img 
       variants={fadeIn("right", 0.6)}
       initial="hidden"
       whileInView={"show"}
     className="bg-auto hover:bg-contain"  viewport={{ once: false, amount: 0.3 }} src={photo1} alt="profile-picture" />
    
    </div>
    <div 
    
    className=" text-center relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 ">
      <motion.h4 
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Russberry Tulip
      </motion.h4>
      <motion.p 
      variants={fadeIn("right", 1.0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      <button type="button" class="text-rose-900 bg-gradient-to-r  hover:bg-gradient-to-r focus:ring-4 focus:outline-none
        font-medium rounded-full border-x-4 border-orange-950  text-sm px-5 py-2.5 text-center me-2 mb-2 drop-shadow-2xl addtocart">Add to your "LOVE"</button>
      </motion.p>
    </div>
    <div className="flex justify-center p-6 pt-2 mt-2 gap-7">
      <motion.a
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><CiFacebook/></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><SlSocialTwitter /></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text  text-rose-950">
        <i><FaInstagram /></i>
      </motion.a>
     
    </div>
  </motion.div>
        </motion.div>
<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
  <motion.div 
   variants={fadeIn("right", 0.4)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.3 }}
  
  className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <motion.img 
       variants={fadeIn("right", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
      
      className="" src={photo2} alt="profile-picture" />
    </div>
    <div 
    
    className=" text-center relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 ">
      <motion.h4 
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Russberry Tulip
      </motion.h4>
      <motion.p 
      variants={fadeIn("right", 1.0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      <button type="button" class="text-rose-900 bg-gradient-to-r  hover:bg-gradient-to-r focus:ring-4 focus:outline-none
        font-medium rounded-full border-x-4 border-orange-950  text-sm px-5 py-2.5 text-center me-2 mb-2 drop-shadow-2xl addtocart">Add to your "LOVE"</button>
      </motion.p>
    </div>
    <div className="flex justify-center p-6 pt-2 mt-2 gap-7">
      <motion.a
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><CiFacebook/></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><SlSocialTwitter /></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("right", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text  text-rose-950">
        <i><FaInstagram /></i>
      </motion.a>
     
    </div>
  </motion.div>
        </motion.div>
<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
  <motion.div 
   variants={fadeIn("left", 0.4)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.3 }}
  
  className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <motion.img 
       variants={fadeIn("left", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
      
      className="" src={photo3} alt="profile-picture" />
    </div>
    <div 
    
    className=" text-center relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 ">
      <motion.h4 
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Russberry Tulip
      </motion.h4>
      <motion.p 
      variants={fadeIn("left", 1.0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      <button type="button" class="text-rose-900 bg-gradient-to-r  hover:bg-gradient-to-r focus:ring-4 focus:outline-none
        font-medium rounded-full border-x-4 border-orange-950  text-sm px-5 py-2.5 text-center me-2 mb-2 drop-shadow-2xl addtocart">Add to your "LOVE"</button>
       </motion.p>
    </div>
    <div className="flex justify-center p-6 pt-2 mt-2 gap-7">
      <motion.a
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><CiFacebook/></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><SlSocialTwitter /></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text  text-rose-950">
        <i><FaInstagram /></i>
      </motion.a>
     
    </div>
  </motion.div>
        </motion.div>
<motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
  <motion.div 
   variants={fadeIn("left", 0.4)}
   initial="hidden"
   whileInView={"show"}
   viewport={{ once: false, amount: 0.3 }}
  
  className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 cardie" >
    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-t-3xl h-64 sm:h-80">
      <motion.img 
       variants={fadeIn("left", 0.6)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
      
      className=" box bg-center bg-cover" src={photo4} alt="profile-picture"/>
    </div>
    <div 
    
    className=" text-center relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-80 sm:w-96 ">
      <motion.h4 
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Russberry Tulip
      </motion.h4>
      <motion.p 
      variants={fadeIn("left", 1.0)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      
      className="block font-sans text-base antialiased font-medium leading-relaxed bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
      <button type="button" class="text-rose-900 bg-gradient-to-r  hover:bg-gradient-to-r focus:ring-4 focus:outline-none
        font-medium rounded-full border-x-4 border-orange-950  text-sm px-5 py-2.5 text-center me-2 mb-2 drop-shadow-2xl addtocart">Add to your "LOVE"</button>
      </motion.p>
    </div>
    <div className="flex justify-center p-6 pt-2 mt-2 gap-7">
      <motion.a
      variants={fadeIn("left", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><CiFacebook/></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("left", 0.6)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text text-rose-950">
        <i><SlSocialTwitter /></i>
      </motion.a>
      <motion.a 
      variants={fadeIn("left", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      href="#facebook" className="block font-sans text-4xl antialiased font-normal leading-relaxed bg-clip-text  text-rose-950">
        <i><FaInstagram /></i>
      </motion.a>
     
    </div>
  </motion.div>
        </motion.div>


</div>
<Grid/>
</>

    )
}
export default Cards;