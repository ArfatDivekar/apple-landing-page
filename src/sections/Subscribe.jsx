import { Button } from "../components"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 font-poppins " id="contact-us">
      <h3 className="text-4xl font-bold leading-[68px]">Sign Up for 
        <span className="text-blue-500"> Updates </span>
        & Limited Offers
      </h3>
      <div className="lg:max-w-[40%] w-full items-center max-sm:flex-col gap-5 p-2.5 border border-slate-300 rounded-[25px]">
        <input type="email" placeholder="Enter your e-mail address" className="input my-5 w-full"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Subscribe" fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe