import Button from "../components/button";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { phones, statistics } from "../constants";
import { iPhone1 } from "../assets/images";
import PhoneCards from "../components/PhoneCards";

const Hero = () => {
  const [iphoneImg, setIphoneImg] = useState(iPhone1)
  return (
    <section 
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container  p-2">

        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ">
          <p className="text-[30px] font-poppins font-bold">Our new launch</p>
          <h1 className="mt-6 font-poppins text-[70px] max-sm:text-[50px] max-sm:leading-[82] font-bold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-5 rounded-[15px]">The all brand new</span> <br />
            <span className="text-blue-500 inline-block">iPhone 16</span> 
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-5 rounded-[20px]"> Series</span>
          </h1>
          <p className="font-poppins text-lg mt-5 mb-5">The stylish and the most innovative iPhone of all the time</p>
          <Button label="Show more" iconURL={arrowRight}/>

          <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-20">
            {statistics.map((stat) => (
              <div key={stat.label} className="max-xl:padding-x mt-0">
                <p className="text-3xl font-poppins font-bold">{stat.value}</p>
                <p className="leading-7 text-[20px] font-poppins">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary    bg-hero bg-cover bg-top rounded-2xl">
          <img 
            src={iphoneImg} 
            alt="iPhone 16"
            width={500}
            height={472}
            className="object-contain relative z-10"
          />
        
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[22%] max-sm:px-6">
          {phones.map((phone) => (
            <div key={phone}>
              <PhoneCards 
              imageURL={phone}
              changeIphoneImg = {(phone) => setIphoneImg(phone)}
              iphoneImg={iphoneImg}/>
            </div>
          ))}
          </div>
        </div>
    </section>
  )
}

export default Hero