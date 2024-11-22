import Link from 'next/link';
import React from 'react'

function NavBar() {
    const pages = {'Home': "/", 'Projects': "/projects", 'Experiences': "/experiences"};
  return (
    <nav className='flex justify-end'>
        <ul className='flex justify-between gap-8 h-auto w-auto'>
        {Object.entries(pages).map(([name, url]) => (
            
            <li key={name} className='font-bold w-auto' >
                
                <Link href={url} className='text-xl'>{name}</Link>
            </li>
        ))}
        </ul>
        
        
    </nav>
    
  )
}

export default NavBar