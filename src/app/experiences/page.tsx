"use client";
import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import ExpCard from "../ui/ExpCard";
import ExpandedCard from "../ui/ExpandedCard";

export interface expType {
  name: string;
  skills: string[];
  date: string;
  description: string;
  img: string;
  role: string;
}

const experience_list: expType[] = [
  {
    name: "Alluvion, Inc.",
    skills: ["SEO", "wix", "UI Design"],
    date: "Jan 2024 - Present",
    description:
      "Worked on the commpany website to advertise and attract consumers and buisness owners",

    img: "/alluvion_logo.png",
    role: "UI Designer",
  },
  {
    name: "Genki Spark",
    skills: ["SEO", "wix", "UI Design"],
    date: "Jan 2024 - Present",
    description:
      "Worked on the commpany website to advertise and attract consumers and buisness owners",

    img: "/genki_spark_logo.jpg",
    role: "Software Engineer",
  },
  {
    name: "CakeWorks",
    skills: ["SEO", "wix", "UI Design"],
    date: "Jan 2024 - Present",
    description:
      "Worked on the commpany website to advertise and attract consumers and buisness owners",

    img: "/cakeworks_logo.png",
    role: "UI Designer",
  },
  {
    name: "eWorldES",
    skills: ["SEO", "wix", "UI Design"],
    date: "Jan 2024 - Present",
    description:
      "Worked on the commpany website to advertise and attract consumers and buisness owners",

    img: "/eworldES_logo.jpg",
    role: "Software Developer Intern",
  },
];
function page() {
  const [is_expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(experience_list[0]);

  const handleClick = (exp: expType) => {
    setExpanded(true);
    setSelected(exp);
  };

  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <div className="">
      <NavBar />
      {is_expanded ? (
        <div className="relative ml-48 mr-48 mt-32">
          <ExpandedCard exp={selected} close={handleClose} />
        </div>
      ) : (
        <div className="relative m-48 ">
          <div className="absolute w-11/12 p-1 border-t-2 border-black border-dotted top-10 right-0 -z-10"></div>
          <div className="flex flex-row-reverse justify-between">
            {experience_list.map((cur_exp) => (
              <ExpCard
                key={cur_exp.name}
                exp={cur_exp}
                onSelect={handleClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
