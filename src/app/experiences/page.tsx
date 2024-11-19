import React from 'react'
import NavBar from '../ui/NavBar'
import ExpCard from '../ui/ExpCard'

export interface expType {
  name: string;
  img: string;
  role: string;
}

const experience_list: expType[] = [
  {
    name: "Alluvion Website",
    img: "/allvion.png",
    role: 'UI Designer',
  },
  {
    name: "Genki Spark",
    img: "/genki.png",
    role: 'Software Engineer',
  },
  {
    name: "CakeWorks Website",
    img: "/cakeworks.png",
    role: 'UI Designer',
  },
  {
    name: 'eWorld Enterprise Solutions',
    img: '/eworld.png',
    role: 'Software Developer Intern',
  },

]
function page() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <div className='timeline'>
      {
        experience_list.map((cur_exp) => (
          <ExpCard key={cur_exp.name} exp={cur_exp}/>
        )
      )}
      </div>
    </div>
  )
}

export default page