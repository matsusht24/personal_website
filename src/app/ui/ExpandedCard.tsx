import React from 'react'
import { expType } from '../experiences/page';
import Image from 'next/image';

const test = {
  name: "Alluvion, Inc",
  skills: ['SEO', 'wix', 'UI Design'],
  date: "Jan 2024 - Present",
  description: "Worked on the commpany website to advertise and attract consumers and buisness owners",
  img: "/alluvion_logo.png"
};


function ExpandedCard() {
  return (
    <div className="relative w-full h-full border-dotted border-black border-2">
      <div className="grid grid-cols-4 gap-4 bg-black ">
        <div className="bg-white p-10 text-center text-lg col-span-1 row-span-2"><Image src={test.img} alt={test.name} width={100} height={100}/></div>
        <div className="bg-white p-10 text-center text-lg "><strong>{test.name}</strong></div>
        <div className="bg-white p-10 text-center text-lg "></div>
        <div className="bg-white p-10 text-center text-lg ">{test.date} </div>
        <div className="bg-white p-10 text-center text-lg col-span-3">
          <div className="flex justify-start">{
            // test.skills.map(
              
            // )}
          }
          </div>
        </div>
        <div className='bg-white p-10 text-center text-lg col-start-1 col-end-5 row-span-3'>{test.description}</div>
        
        

      </div>
    </div>
  )
}

export default ExpandedCard