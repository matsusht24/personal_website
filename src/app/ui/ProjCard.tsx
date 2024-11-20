import React from 'react'
import { projectType } from '../projects/page'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import Link from 'next/link'

function ProjCard({project}: {project: projectType}) {
  return (
    <div>{project.name}
    <Link href={"/"}></Link></div>
  )
}

export default ProjCard