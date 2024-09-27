import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"

const CustomerReview = () => {
  return (
    <section className="max-container font-poppins">
      <h3 className="text-4xl font-bold text-center">
        What our
        <span className="text-blue-500"> Customers </span>
        Say?
      </h3>

      <p className="info-text m-auto mt-4 max-w-lg text-center">
      Hear genuine stories from our satisfied customers and their exceptional experiences with us.
      </p>

      <div className="mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName} 
          imgURL={review.imgURL} 
          customerName={review.customerName} 
          rating={review.rating} 
          feedback={review.feedback}/>
        ))}
      </div>

    </section>
  )
}

export default CustomerReview