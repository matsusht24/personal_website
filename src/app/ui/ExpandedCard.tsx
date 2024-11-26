import React from 'react'
import { expType } from '../experiences/page';


function ExpandedCard() {
  return (
    <div className="relative w-full h-full border-dotted border-black border-2">
      <strong>Test</strong>
      <div className="grid grid-cols-4 gap-4 bg-black ">
        <div className="bg-white p-10 text-center text-lg row-span-2 ">1</div>
        <div className="bg-white p-10 text-center text-lg ">2</div>
        <div className="bg-white p-10 text-center text-lg ">3</div>
        

      </div>
    </div>
  )
}

export default ExpandedCard