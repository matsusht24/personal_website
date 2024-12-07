"use client";
import React, { useState } from "react";
import NavBar from "../ui/NavBar";
import ExpCard from "../ui/ExpCard";
import ExpandedCard from "../ui/ExpandedCard";
import { baseType } from "../page";

// function delay(ms: number): Promise<void> {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

export interface expType extends baseType {

  date: string;
  role: string;
  location: string;
}

const experience_list: expType[] = [
  {
    name: "Alluvion, Inc.",
    skills: ["JavaScript", "Wix", "UI Design", "SEO", "Wix Analytics"],
    date: "Jan 2024 - Present",
    description: `Redesigned Alluvion’s website to increase user engagement and drive conversions
       by aligning the user journey with business objectives. Collaborated with the
       owners during biweekly meetings to ensure the site reflected their branding
       and showcased key offerings. Conducted user surveys and usability testing to
       identify navigation and interface pain points, optimizing the user flow and
       all-to-action elements. These efforts resulted in a 900% increase in user
       engagement.`,
    contributions: [
      "Created a seamless, visually appealing user experience using Wix and custom HTML/CSS elements",
      "Designed intuitive navigation paths, strategically leading users to contact forms and call actions.",
      "Leveraged responsive design principles to ensure usability across devices.",
    ],

    logo: "/alluvion_logo.png",
    role: "Web Developer",
    location: "Remote",
    img:"",

  },
  {
    name: "Genki Spark",
    skills: ["Python", "React", "Figma", "TensorFlow", "PostgreSQL"],
    date: "Jan 2023 - May 2023",
    description: `At Genki Spark, I contributed to the development of an MVP to showcase
     to potential investors by improving the model that predicts disease probabilities
     and designing a user-friendly dashboard for doctors. Working closely with the CTO,
     I helped develop a machine learning model using Python to predict the likelihood of
     diseases like diabetes with 86.6% accuracy by backtesting on health data.

     Additionally, I collaborated with the UI designer to create a React-based
     dashboard, allowing doctors to visualize patient information and disease
     predictions. To ensure the dashboard met user needs, I conducted 25+ user
     interviews to validate features and page layouts. As part of my efforts to
     attract investment for the startup, I also gave a presentation at my school’s
     venture competition.`,
    contributions: [
      "Developed a machine learning model with an 86.6% accuracy rate to predict the probability of diabetes and other diseases.",
      "Built a React-based dashboard to present patient data and predictions, improving doctors' ability to make informed decisions.",
      "Conducted 25+ user interviews to refine test features and dashboard layout, ensuring a seamless UX/UI design",
    ],
    logo: "/genki_spark_logo.jpg",
    role: "Software Engineer",
    location: "Portland, OR",
    img: "",
  },
  {
    name: "CakeWorks",
    skills: ["Php", "WordPress", "UI Design", "SEO", "A/B Testing"],
    date: "May 202 - Aug 2023",
    description: 
    `At CakeWorks, I was tasked with redesigning the company’s website to give it a
     more modern and user-centric look while addressing numerous bugs and errors
     from the previous version. I utilized WordPress to create a minimalistic
     design that streamlined the user journey, guiding visitors seamlessly to 
     their goal. Throughout the project, I collaborated closely with the owner 
     in monthly meetings to align the new design with the company’s brand identity
     and resolve ongoing issues.

     To better understand customer needs and preferences, I conducted user polls that
     provided key insights for driving design decisions. As a result of these efforts,
     the company saw a 67% increase in sales and resolved over 40 bugs and errors on the
     previous website, significantly improving the user experience.`,
    contributions: [
      "Redesigned the website using WordPress, creating a modern, user-friendly experience that aligned with the company’s brand.",
      "Conducted user polls to gain insights into the customer base and inform design decisions.",
      "Fixed 40+ bugs and errors from the previous website, enhancing overall functionality and performance.",

    ],
    logo: "/cakeworks_logo.png",
    role: "UI Designer",
    location: "Honolulu, HI",
    img: "",
  },
  {
    name: "eWorld Enterprise Solutions",
    skills: ["Python", "OCR", "Database managment", "Postmate", "APIs"],
    date: "May 2022 - Aug 2022",
    description: 
    `During my internship at eWorld Enterprise Solutions, I worked as part of the
     OCR team to improve the organization and accessibility of over 1,000 archived
     school blueprints. Using Google Cloud's OCR tool, our goal was to extract
     metadata from these blueprints and store them in a new, well-organized Dropbox
     system.

     I was responsible for optimizing the use of hashmaps to efficiently locate
     relevant data and clean the OCR-generated output. I worked closely with a remote
     team in the Philippines, who manually reviewed the documents, ensuring the
     accuracy of the extracted information. Based on their feedback, I updated and
     corrected metadata before organizing the files. I then used the Dropbox API to
     rename and structure the files according to the client’s requirements,
     streamlining the entire process.`,
    contributions: [
      "Optimized hashmap implementation for faster, more accurate data retrieval from OCR results.",
      "Cleaned and updated OCR data, collaborating with an international team to ensure accuracy.",
      "Streamlined the file organization process using the Dropbox API, creating an automated workflow for over 1,000+ blueprints.",
    ],
    logo: "/eworldES_logo.jpg",
    role: "Software Developer Intern",
    location: "Honolulu, HI",
    img: "",
  },
];


function Page() {
  const [is_expanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(experience_list[0]);

  const handleClick = (exp: expType) => {
    setIsExpanded(true);
    setSelected(exp);
  };

  const handleClose = () => {
    setIsExpanded(false);
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

export default Page;
