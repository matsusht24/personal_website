import React from "react";
import Image from "next/image";
import { expType } from "../experiences/page";
function ExpCard({ exp }: { exp: expType }) {
  return (
    <div className="flex flex-col">
      <div className="relative w-20 h-20 shadow-lg rounded-full ">
        <Image
          alt={exp.name}
          src={exp.img}
          width={100}
          height={100}
          className="w-full h-full object-cover rounded-full overflow-hidden"
        />
      </div>
      <div className="border-dashed border-gray-600 border-2 p-2 hover:shadow-lg">
        <h1 className="font-bold text-lg">{exp.name}</h1>
        <p className="text-gray-600">{exp.role}</p>
      </div>
    </div>
  );
}

export default ExpCard;
