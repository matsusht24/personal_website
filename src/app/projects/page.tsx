import Link from 'next/link'
import React from 'react'
import NavBar from '../ui/NavBar'
import ProjCard from '../ui/ProjCard'

export interface projectType {
  name: string, 
  category: string, 
  skills: string[],
  img: string,

  
};

const project_list:projectType[]= [
  {
    name: "Hearthstone Battleground Helper",
    img: "/heartstone.png",
    category: 'Full-Stack',
    skills: ['React', 'Flask', 'Web Scrapping'],
  },
  {
    name: "Formula SAE",
    img: '/formula.png',
    category: 'Firmware',
    skills: ['Data Analysis', 'C', 'Sensor Design'],

  },
  {
    name: "Malawi Gradebook", 
    img: '/malawi.png',
    category: 'Full Stack',
    skills: ["LAMP stack", "UI Design"],

  },
  {
    name: "Song Recommeder",
    img: '/song.png',
    category: 'Machine Learning',
    skills: ['Python', "Music21"],
    
  }
  
];


function page() {
  return (
    <div className="wrapper">
     <div className=''>
      <NavBar/>
      <div className='flex flex-row-reverse justify-between'>
      {
        project_list.map((cur_exp) => (
          <ProjCard key={cur_exp.name} project={cur_exp}/>
        )
      )}
      </div>
    </div>
    </div>
  )
}

export default page