"use client";
import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import ProjCard from "../ui/ProjCard";
import { baseType} from "../page";
import ExpandedCard from "../ui/ExpandedCard";

export interface projectType extends baseType {
  category: string;
  outcomes: string[];
}

const project_list: projectType[] = [
  {
    name: "Hearthstone Battleground Helper",
    img: `/personal_website/hearthstone.png`,
    logo: `/personal_website/hearthstone.png`,
    category: "Full-Stack",
    skills: ["React", "Flask", "Web Scrapping"],
    contributions: [
      "Real-time Insights: Built a dynamic web app using React and Flask to display live game data and provide real-time insights into opponent strategies.",
      "API Integration: Integrated third-party APIs to fetch real-time game data, enhancing the interactivity and accuracy of the tool.",
      "UI/UX Design: Applied Tailwind CSS to create a responsive, intuitive user interface optimized for smooth navigation and quick access to key game data.",
    ],
    description: `A web-based companion tool designed to assist players in Hearthstone Battlegrounds
     by providing real-time gameplay insights, allowing users to make informed 
     decisions during matches.`,
    outcomes: [
      "Increased user engagement by offering strategic insights that helped players improve their gameplay performance.",
      "Enhanced the user experience by providing real-time data, making the tool an essential companion for players during live matches.",
    ],
  },
  {
    name: "Formula SAE",
    img: `/personal_website/formula.png`,
    logo: `/personal_website/formula.png`,
    category: "Firmware",
    skills: ["Data Analysis", "C", "Sensor Design"],
    contributions: [
      "Torque Security Optimization: Ensured accurate and efficient torque control throughout the car, optimizing the performance of the vehicle during testing.",
      "Test Case Development: Designed and implemented comprehensive test cases to verify the data integrity of the Accelerator Pedal Position Sensor (APPS), ensuring reliable performance.",
      "Collaborative Design: Worked closely with engineers from various disciplines to refine the car's design and integrate components to meet performance standards.",
    ],
    description: `Part of UP's first 12-member interdisciplinary team to design and build a Formula
     SAE electric race car, focusing on optimizing torque security and data integrity 
     for critical components.`,
    outcomes: [
      "Contributed to a solid foundation of a competitive electric race car, meeting design and safety standards.",
      "Helped improve the reliability and accuracy of key components, such as the APPS sensor, critical to the car's performance during races.",
    ],
  },
  {
    name: "Malawi Gradebook",
    img: `/personal_website/malawi.png`,
    logo: `/personal_website/malawi.png`,
    category: "Full Stack",
    skills: ["LAMP stack", "UI Design"],
    contributions: [
      "Mobile Optimization: Created a user-friendly, responsive gradebook interface using the LAMP framework, ensuring seamless access across devices, especially mobile.",
      "Enhanced Security: Implemented role-based access control (RBAC) and multi-factor authentication (MFA) to improve the security and privacy of student and faculty data.",
      "Backend Development: Used PHP and MySQL to create the backend infrastructure, ensuring efficient data management and secure access to grade data.",
    ],
    description: `Developed a mobile-friendly gradebook interface for a Malawi-based educational 
     system, improving user accessibility and security for students and administrators.`,

    outcomes: [
      "Provided a secure, mobile-friendly solution that increased access to educational records, improving the user experience for students and teachers.",
      "Strengthened the platform's security by implementing advanced authentication methods, ensuring the protection of sensitive data.",
    ],
  },
];

function Page() {
  const [is_expanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(project_list[0]);

  const handleClick = (project: projectType) => {
    setIsExpanded(true);
    setSelected(project);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="wrapper">
      <strong></strong>
      <div className="header">
        <NavBar />
        {is_expanded ? (
          <div className="relative ml-48 mr-48 mt-32">
            <ExpandedCard exp={selected} close={handleClose} />
          </div>
        ) : (
          <>
            <div className="flex flex-row justify-center ">
              <div className="flex-col text-center">
                <strong className=" text-3xl ">Project</strong>
                <p>Independent or class related experiences </p>
              </div>
            </div>

            <div className="flex justify-between p-10 ml-40 mr-40">
              {project_list.map((cur_exp) => (
                <ProjCard key={cur_exp.name} project={cur_exp} onSelect={handleClick}/>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
