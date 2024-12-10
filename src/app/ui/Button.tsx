import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import ProjectImg from "@/../public/project.svg"
import ExperienceImg from "@/../public/experience.svg"
const link_dict = {
    'Experiences': {
        link:"/experiences",
        img: ExperienceImg,
        alt: "experience"
    },
    'Projects': {
        link: "/projects",
        img: ProjectImg,
        alt: "project"
    },
};

type ButtonProps = 'Experiences'|'Projects';


function Button({label}: {label: ButtonProps}) {
    const cur_button = link_dict[label];
    console.log(cur_button.img)
  return (
    <div >
        <Link href={cur_button.link ?? "/"} className="w-full h-full flex items-center justify-center rounded-lg shadow-md  hover:bg-sky-100">
            <Image width={200} height={100} alt={cur_button.alt} src={cur_button.img} />
        </Link>
    </div>
    );
}

export default Button