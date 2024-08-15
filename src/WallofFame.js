import React from 'react';
import { motion } from "framer-motion";
import {fadeIn} from '../src/varients';
import './Cards.css'
import Footer from './Components/Footer'
const WallOfFame = () => {
  return (
    <>
    <p className='walloffame mt-8 text-5xl '>Wall Of Fame</p>
    <div className="grid grid-cols-5 grid-rows-8 gap-2 mt-2 px-20">
      <motion.div 
      variants={fadeIn("right", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 1.2 }}
       transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
      className="row-span-4 col-start-1 row-start-3 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://media.gettyimages.com/id/2161096393/photo/bollywood-actress-alia-bhatt-poses-for-photos-as-she-arrives-to-attend-the-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=H3Yi2zvocrzR7KhxisAMd-8r1Vmv0kP1k5WIV8EzRGU="
          alt="Alia Bhatt"
        />
      </motion.div>
      <motion.div
       variants={fadeIn("down", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
       
      className="row-span-3 col-start-2 row-start-2 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://i.pinimg.com/474x/72/f4/23/72f423ee212eaad19b1978d6c3ca99e1.jpg"
          alt=""
        />
      </motion.div>
      <motion.div 
       variants={fadeIn("up", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
       
      className="row-span-3 col-start-2 row-start-5 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://i.pinimg.com/474x/52/c5/4d/52c54d8930ff16a947640df9e9ccfec3.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
       variants={fadeIn(1.0)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
       
      className="row-span-8 col-start-3 row-start-1 flex justify-center items-center">
        <img
          className="h-full w-96 rounded-lg object-cover"
          src="https://i.pinimg.com/564x/ed/8c/ee/ed8cee5095df7e7377470bd4aac7c067.jpg"
          alt=""
        />
      </motion.div>
      <motion.div
      
      variants={fadeIn("down", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 1.2 }}
       transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
      className="row-span-3 col-start-4 row-start-2 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://i.pinimg.com/564x/92/0b/53/920b53602f3f6a027cec90c413bcd1a3.jpg"
          alt=""
          />
      </motion.div>
      <motion.div 
       variants={fadeIn("up", 0.5)}
       initial="hidden"
       whileInView={"show"}
       viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17}}
       
      
      className="row-span-3 col-start-4 row-start-5 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://i.pinimg.com/736x/50/c4/e4/50c4e4271446c06c2c5acb1fe8de51a6.jpg"
          alt=""
          />
      </motion.div>
      <motion.div 
      variants={fadeIn("left", 0.5)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 1.2 }}
       transition={{ type: "spring", stiffness: 400, damping: 17 }}
      
      className="row-span-4 col-start-5 row-start-3 flex justify-center items-center">
        <img
          className="h-full w-auto rounded-lg object-cover"
          src="https://i.pinimg.com/564x/00/6d/0b/006d0b0c37b2057e297926039aceccf6.jpg"
          alt=""
          />
      </motion.div>
    </div>
    <p className='walloffame mt-8 text-5xl '>Wall Of Fame</p>
<Footer/>
    </>
    
  );
};

export default WallOfFame;
