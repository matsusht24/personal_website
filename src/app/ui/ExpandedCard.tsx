import React from 'react'
import { expType } from '../experiences/page';

interface cardType extends expType{
    skills: string[],
    description: string,  
};

const cards: {[id: string]: cardType;} = {
  'Alluvion, Inc': {name: "Alluvion, Inc", skills: ['UI Design', 'Wix', 'SEO'], description: "Created a website to advertise and attract orders for florist and nursery needs."},
  'Genki Spark': {name: "Genki"}
};


function ExpandedCard() {
  return (
    <div className="w-full h-full border-dotted border-black">
      
    </div>
  )
}

export default ExpandedCard