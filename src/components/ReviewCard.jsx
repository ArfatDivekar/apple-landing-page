import { star } from "../assets/icons"
const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col font-poppins">
        <img src={imgURL} alt="review" className="rounded-full object-cover w-[120px] h-[120px]"/>
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="flex justify-center items-center mt-3 gap-2.5">
            <img src={star} width={24} height={24} className="object-contain m-0"/>
            <p className="text-l text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 text-3xl font-bold text-center">{customerName}</h3>
    </div>
  )
}

export default ReviewCard