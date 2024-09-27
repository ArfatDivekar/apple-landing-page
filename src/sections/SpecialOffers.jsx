import { offers } from "../constants"
import SpecialOffersCards from "../components/SpecialOffersCards"

const SpecialOffers = () => {
  return (
    <section>
    <div className="flex flex-1 flex-col font-poppins">
        <h2 className="text-4xl font-poppins font-bold text-gray-800">
          <span className="text-blue-500"> Special </span>
          Offers
        </h2>

        <div className="mt-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 sm:gap-15 gap-14">
        {offers.map((offer) => (
          <SpecialOffersCards key={offer.name} {...offer} />
        ))}
      </div>
      </div>
      </section>
    )
}

export default SpecialOffers