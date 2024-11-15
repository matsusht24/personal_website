import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
const link_dict = {
    'Experiences': {
        link:"/experiences",
        img: "/experience.svg",
        alt: "experience"
    },
    'Projects': {
        link: "/projects",
        img: "/project.svg",
        alt: "project"
    },
};

type ButtonProps = 'Experiences'|'Projects';


function Button({label}: {label: ButtonProps}) {
    const cur_button = link_dict[label];
  return (
    <div >
        <Link href={cur_button.link ?? "/"} className="w-40 h-3 flex items-center justify-center rounded-lg shadow-md">
            <Image width={200} height={100} alt={cur_button.alt} src={cur_button.img} />
        </Link>
    </div>
    );
}

export default Button