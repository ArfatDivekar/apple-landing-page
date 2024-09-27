import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { headerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container text-white-400 font-poppins">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <div className="flex justify-between items-center max-container">
            <img src={headerLogo} width={26} height={26}/>
            <p className="leading-normal text-[20px] text-white-400 flex cursor-pointer px-3">Apple</p>
            </div>
          </a>
          <p className="mt-6 leading-7 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. In eligendi magnam ullam quaerat impedit eius rem cupiditate expedita aperiam ut culpa, iste exercitationem asperiores suscipit! Nostrum</p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center bg-white w-12 h-12 rounded-full cursor-pointer">
              <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))} 
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white-400">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-2xl leading-normal font-medium">{section.title}</h4>
                  <ul>
                    {section.links.map((link) => (
                      <li className="mt-3 text-base leading-normal hover:text-slate-400 cursor-pointer"  key={link.name}>
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-poppins">
        <div className="flex flex-1 justify-start items-center gap-2">
            <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full" />
            <p>Copyright. All rights reserved to
              <span className="font-bold"> Arfat Divekar </span>  
            </p>
        </div>
        <p className="cursor-pointer">Terms & Conditions</p>
          
      </div>
    </footer>
  )
}

export default Footer