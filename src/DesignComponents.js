import React from 'react';
import { IoFlowerSharp } from "react-icons/io5";
import { RxDropdownMenu } from "react-icons/rx";
import './DesignComponents.css'; 

import Description from './Description';

const items = [
  { icon: <IoFlowerSharp />, text: 'ROSES', iconColor: 'text-yellow-700', color: 'bg-structure' },
  { icon: <IoFlowerSharp />, text: 'LILY', color: 'bg-develop', iconColor: 'text-red-700' },
  { icon: <IoFlowerSharp />, text: 'SUNFLOWER', color: 'bg-calculate', iconColor: 'text-green-700' },
  { icon: <IoFlowerSharp />, text: 'LOTUS', color: 'bg-test', iconColor: 'text-blue-700' },
  { icon: <IoFlowerSharp />, text: 'HIBISCUS', color: 'bg-execute', iconColor: 'text-indigo-700' },
];

const DesignComponent = () => {
  return (
    <>

    <div className="flex flex-col items-center space-y-4 p-8 mt-8">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center p-4 rounded-lg shadow-lg w-full max-w-xs ${item.color}`}>
          <div className={`text-3xl ${item.iconColor}`}>
            {item.icon}
          </div>
          <span className="ml-4 text-white text-lg font-semibold ">
            {item.text}
          </span>
          <div className="ml-auto text-white text-xl">
          <RxDropdownMenu />
          </div>
        </div>
      ))}
    </div>
    <Description/>
      </>
  );
};

export default DesignComponent;
