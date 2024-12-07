import React from "react";
import { projectType } from "../projects/page";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

type cardPropTypes = {
  project: projectType;
  onSelect: (exp: projectType) => void;
};

function ProjCard({ project, onSelect }: cardPropTypes) {
  return (
    <div role="button" className="relative" onClick={() => onSelect(project)}>
      <div className="flex justify-center bg-white bg-opacity-60 w-72 h-72 rounded-md shadow-md hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1">
        <Image
          src={project.img}
          alt={project.name}
          width={300}
          height={250}
          className="hidden  md:block max-w-full max-h-full object-contain"
        />
      </div>
      
      
      <div className="">
        <strong>{project.name}</strong>
        <p>Description</p>
      </div>
    </div>
  );
}

export default ProjCard;
