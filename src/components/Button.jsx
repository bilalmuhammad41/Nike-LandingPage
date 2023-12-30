import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 rounded-full leading-none text-lg font-montserrat border ${
      backgroundColor ? 
      `${backgroundColor} ${textColor} ${borderColor}`: "text-white border-coral-red  bg-coral-red"} ${fullWidth && 'w-full'}`}>
      {label}
 
      {iconURL && <img className="m;-2 rounded-full w-5 h-5"
      src={iconURL} alt="" />}

    </button>
  )
}

export default Button