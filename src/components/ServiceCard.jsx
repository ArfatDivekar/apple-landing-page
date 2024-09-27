const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-10 py-10 border transform transition-all hover:translate-y-2 duration-300 shadow-xl hover:shadow-3xl">
      <div className="w-11 h-11 flex justify-center items-center bg-blue-500 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      
      <h3 className="mt-5 font-poppins text-3xl leading-normal font-bold ">{label}</h3>
      <p className="mt-3 break-words font-poppins text-l leading-normal text-slate-gray">{subtext}</p>

    </div>
  )
}

export default ServiceCard