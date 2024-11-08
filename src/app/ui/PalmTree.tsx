import React from 'react'

function PalmTree() {
  return (
    <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Trunk */}
    <path d="M50 150 C60 100, 40 100, 50 50" stroke="#D2B48C" strokeWidth="10" fill="none"/>
    
    {/* Leaves */}
    <path d="M50 50 C70 30, 90 30, 80 60" fill="#228B22"/>
    <path d="M50 50 C30 30, 10 30, 20 60" fill="#228B22"/>
  </svg>
  )
}

export default PalmTree