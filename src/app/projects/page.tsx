import Link from 'next/link'
import React from 'react'
import NavBar from '../ui/NavBar'

type project = {
  name: string, 
  date: string, 
  skills: [string],
  img: string,
  
};

function page() {
  return (
    <div className="wrapper">
      <div className="header">
        <NavBar/>
        
        </div>
    </div>
  )
}

export default page