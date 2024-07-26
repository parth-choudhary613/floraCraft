import React from 'react';
import { FaQuestion, FaBook, FaCalculator, FaFlask, FaRocket } from 'react-icons/fa';
import './DesignComponents.css'; 
import Grid from './Grid'

const items = [
  { icon: <FaQuestion />, text: 'STRUCTURE', iconColor: 'text-yellow-700', color: 'bg-structure' },
  { icon: <FaBook />, text: 'DEVELOP', color: 'bg-develop', iconColor: 'text-red-700' },
  { icon: <FaCalculator />, text: 'CALCULATE', color: 'bg-calculate', iconColor: 'text-green-700' },
  { icon: <FaFlask />, text: 'TEST', color: 'bg-test', iconColor: 'text-blue-700' },
  { icon: <FaRocket />, text: 'EXECUTE', color: 'bg-execute', iconColor: 'text-indigo-700' },
];

const DesignComponent = () => {
  return (
    <>
<Grid/>
    <div className="flex flex-col items-center space-y-4 p-8 mt-8">
      {items.map((item, index) => (
        <div key={index} className={`flex items-center p-4 rounded-lg shadow-lg w-full max-w-xs ${item.color}`}>
          <div className={`text-3xl ${item.iconColor}`}>
            {item.icon}
          </div>
          <span className="ml-4 text-white text-lg font-semibold">
            {item.text}
          </span>
          <div className="ml-auto text-white text-xl">
            ✔️
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default DesignComponent;
