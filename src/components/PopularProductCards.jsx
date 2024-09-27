import { star1 } from "../assets/icons"
const PopularProductCards = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-2xl border-2 p-4 transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img 
        src={imgURL} alt={name} 
        className="w-[280px] h-[280px] object-contain rounded-xl bg-slate-300"
        />

        <h3 className="mt-2 font-poppins leading-normal text-2xl font-semibold">{name}</h3>
        <p className="mt-1 font-poppins text-xl text-blue-500 font-bold">{price}</p>
        <div className="mt-1 mb-5 flex justify-start gap-2.5">
            <img src={star1} alt="rating" width={24} height={18} />
            <p className="font-poppins text-l leading-normal text-slate-gray">(4.5)</p>
        </div>
        <button className="bg-blue-500 rounded-xl w-full h-[10%] text-[18px] text-white font-poppins cursor-pointer">View more</button>

    </div>
  )
}

export default PopularProductCards