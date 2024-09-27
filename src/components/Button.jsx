const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-poppins text-lg text-white border-blue-50 leading-none 
    ${
      backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-blue-500 text-white border-blue-500"} rounded-full ${fullWidth && 'w-full'}`}>
        {label}

        {iconURL && <img src={iconURL} alt="right arrow icon" className="ml-2 rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button