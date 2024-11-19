import Link from 'next/link'
import React from 'react'
import NavBar from '../ui/NavBar'

type project = {
  name: string, 
  date: string, 
  skills: [string],
  img: string,
  
};

const project_list = {
  "HSBG": {
    'name': "Hearthstone Battleground Helper",
    'img': "/heartstone.png",
    'category': 'Full-Stack',
    'skills': ['React', 'Flask', 'Web Scrapping']
  },
  "Formula_SAE": {
    'name': "Formula SAE",
    'img': '/formula.png',
    'category': 'Firmware',
    'skills': ['Data Analysis', 'C', 'Sensor Design'],

  },
  "Malawi": {
    'name': "Malawi Gradebook", 
    'img': '/malawi.png',
    'category': 'Full Stack',
    'skills': ["LAMP stack", "UI Design"],

  },
  "Song_Rec": {
    'name': "Song Recommeder",
    'img': '/song.png',
    'category': 'Machine Learning',
    'skills': ['Python', "Music21"],
  }
  
  

}
function page() {
  return (
    <div className="wrapper">
      <div className="header">
        <NavBar/>
        <div className="projects-containter">
          
        </div>
        </div>
    </div>
  )
}

export default page