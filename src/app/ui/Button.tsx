import React from 'react'

type ButtonProps = {
    label:string
};

function Button({label}: ButtonProps) {
  return (
    <div className="w-40 h-32 bg-gray-200 flex items-center justify-center rounded-lg shadow-md hover:bg-gray-300 transition-all duration-300">
        <span className="text-lg font-semibold">{label}</span>
    </div>
    );
}

export default Button