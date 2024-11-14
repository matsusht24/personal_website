import Link from 'next/link';
import React from 'react'

const link_dict = {
    'Experiences': "/experiences",
    'Projects': "/projects",
};

type ButtonProps = 'Experiences'|'Projects';


function Button({label}: {label: ButtonProps}) {
  return (
    <div >
        <Link href={link_dict[label] ?? "/"} className="text-lg font-semibold w-40 h-32 bg-gray-200 flex items-center justify-center rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300">{label}</Link>
    </div>
    );
}

export default Button