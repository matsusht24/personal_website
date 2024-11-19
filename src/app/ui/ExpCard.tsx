import React from 'react'
import Image from 'next/image'
import { expType } from '../experiences/page'
function ExpCard({exp}: {exp: expType}) {
  return (
    <div>
        <Image alt={exp.name} src={"/experience.svg"} width={100} height={100}/>
        <h1>{exp.name}</h1>
        <p>{exp.role}</p>
    </div>
  )
}

export default ExpCard