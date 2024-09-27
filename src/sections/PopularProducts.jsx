import { PopularProductCards } from "../components"
import { products } from "../constants"

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-poppins font-bold">Our 
        <span className="text-blue-500"> Popolar </span>
        Products
        </h2>
        <p className=" font-poppins text-slate-gray">Check out our most Popular Products which are mostly purchased and loved by our customers</p>
      </div>

      <div className="mt-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCards key={product.name} {...product} />
        ))}
      </div>
    </section>
  )
}

export default PopularProducts