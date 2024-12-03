import React from "react";
import { expType } from "../experiences/page";
import Image from "next/image";
import Button from "./Button";

type cardPropTypes = {
  exp: expType,
  close: () => void, 
}


function ExpandedCard({exp, close}: cardPropTypes) {
  return (
    <div className="relative w-full h-full border-dotted border-black border-2 ">
      <button onClick={close} className="absolute right-0 -top-10">x</button>

      <div className="flex flex-col m-4 ">
        <div className="flex  flex-row ">
          <div className="w-20 h-20 shadow-lg rounded-full">
          <Image src={exp.img} alt={exp.name} width={100} height={100} className="w-full h-full object-cover rounded-full overflow-hidden"/>
          </div>
          
          <div className="flex flex-col ml-2">
            <strong>{exp.name}</strong>
            <strong>{exp.role}</strong>
            {
              <div className="flex justify-start">
                {exp.skills.map((skill) => (
                  <p
                    key={skill}
                    className="p-3 rounded-3xl bg-gray-50 mr-2 hover:bg-blue-50"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            }
          </div>

          <p>{exp.date}</p>
        </div>

        <div className="description">
          <p>{exp.description}</p>
        </div>
      </div>
    
    </div>
  );
}

export default ExpandedCard;
