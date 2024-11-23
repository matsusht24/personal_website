import React from "react";
import NavBar from "../ui/NavBar";
import ExpCard from "../ui/ExpCard";

export interface expType {
  name: string;
  img: string;
  role: string;
}

const experience_list: expType[] = [
  {
    name: "Alluvion, Inc.",
    img: "/alluvion_logo.png",
    role: "UI Designer",
  },
  {
    name: "Genki Spark",
    img: "/genki_spark_logo.jpg",
    role: "Software Engineer",
  },
  {
    name: "CakeWorks",
    img: "/cakeworks_logo.png",
    role: "UI Designer",
  },
  {
    name: "eWorldES",
    img: "/eworldES_logo.jpg",
    role: "Software Developer Intern",
  },
];
function page() {
  return (
    <div className="">
      <NavBar />
      <div className="relative m-48">
        <div className="absolute w-11/12 p-1 border-t-2 border-black border-dotted top-10 right-0 -z-10"></div>
        <div className="flex flex-row-reverse justify-between">
          {experience_list.map((cur_exp) => (
            <ExpCard key={cur_exp.name} exp={cur_exp} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
