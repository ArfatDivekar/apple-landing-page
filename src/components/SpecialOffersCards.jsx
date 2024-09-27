import { star1 } from "../assets/icons"

const SpecialOffersCards = ({imgURL, name, price, discountedprice}) => {
  return (
    <div className="flex flex-1 flex-col w-full h-full max-sm:w-full rounded-2xl border-2 p-4 transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img 
        src={imgURL} alt={name} 
        className="w-full h-[300px] object-contain rounded-xl bg-slate-200"
        />

        <div className="flex justify-between items-end">
          <h3 className="mt-2 font-poppins leading-normal text-2xl font-semibold">{name}</h3>
          <div className="mt-1 flex gap-2.5">
              <img src={star1} alt="rating" width={24} height={18} />
              <p className="font-poppins text-l leading-normal text-slate-gray">(4.5)</p>
          </div>
          </div>
          <p className="mt-1 font-poppins text-3xl text-blue-500 font-bold">{discountedprice} 
          <span className="text-[15px] text-neutral-950"> (Discounted Price)</span> 
          </p>
          <p className="line-through font-poppins text-xl text-slate-400 font-bold ">{price}</p>
          <button className="bg-blue-500 rounded-xl mt-5 w-full h-full text-[18px] px-[10%] py-[2%] text-white font-poppins cursor-pointer">View more</button>
        </div>
  )
}

export default SpecialOffersCards