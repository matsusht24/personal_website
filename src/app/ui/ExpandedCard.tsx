import React from "react";
import { expType } from "../experiences/page";
import Image from "next/image";

const test = {
  name: "Alluvion, Inc",
  skills: ["SEO", "wix", "UI Design"],
  date: "Jan 2024 - Present",
  description:
    "Worked on the commpany website to advertise and attract consumers and buisness owners",
  img: "/alluvion_logo.png",
};

function ExpandedCard() {
  return (
    <div className="relative w-full h-full border-dotted border-black border-2">
      <p className="absolute right-0 -top-10">x</p>

      <div className="flex flex-col ">
        <div className="flex  flex-row ">
          <div className="w-20 h-20 shadow-lg rounded-full">
          <Image src={test.img} alt={test.name} width={100} height={100} className="w-full h-full object-cover rounded-full overflow-hidden"/>
          </div>
          
          <div className="flex flex-col">
            <strong>{test.name}</strong>
            {
              <div className="flex justify-start">
                {test.skills.map((skill) => (
                  <p
                    key={skill}
                    className="p-3 rounded-3xl bg-gray-50 ml-2 hover:bg-blue-50"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            }
          </div>

          <p>{test.date}</p>
        </div>

        <div className="description">
          <p>{test.description}</p>1
        </div>
      </div>
    
    </div>
  );
}

export default ExpandedCard;
