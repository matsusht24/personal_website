import React from "react";
import { expType } from "../experiences/page";
import Image from "next/image";
import Button from "./Button";
import { projectType } from "../projects/page";
type projectOrExp = projectType | expType;

type cardPropTypes = {
  exp: expType;
  close: () => void;
};

function ExpandedCard({ exp, close }: cardPropTypes) {
  return (
    <div className="relative w-full h-full border-dotted border-black border-2 bg-opacity-5 bg-black">
      <button onClick={close} className="absolute right-2 ">
        x
      </button>

      <div className="flex flex-col m-4 gap-5">
        <div className="flex  flex-row ">
          <div className=" w-20 h-20 shadow-lg rounded-full">
            <Image
              src={exp.img}
              alt={exp.name}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-full overflow-hidden"
            />
          </div>

          <div className="flex flex-col ml-6">
            <strong>{exp.role}</strong>
            <div className="flex flex-row mb-1">
              <strong>{exp.name}</strong>
              <div className="h-full border-l-2 border-gray-500 ml-2 mr-2" />
              <p>{exp.location}</p>
            </div>
            <p>{exp.date}</p>

            {
              <div className="flex justify-start">
                {exp.skills.map((skill) => (
                  <p
                    key={skill}
                    className="p-3 rounded-3xl bg-gray-100 mr-2 hover:bg-white"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            }
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col gap-3">
            <strong>Key Contributions:</strong>
            <ul className="list-disc list-inside ml-3">
              {exp.contributions.map((contribution) => (
                <li key={contribution} className="text-wrap">
                  {contribution}
                </li>
              ))}
            </ul>
            <p>{exp.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedCard;
