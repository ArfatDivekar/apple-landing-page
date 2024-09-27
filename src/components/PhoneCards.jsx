const PhoneCards = ({imageURL, changeIphoneImg, iphoneImg}) => {
    const handleClick = () => {
        if(iphoneImg !== imageURL.iPhone) {
            changeIphoneImg(imageURL.iPhone)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
    ${iphoneImg === imageURL.iPhone ? 'border-slate-400' : 'border-transparent'}
    cursor-pointer max-sm:flex1`}
    onClick={handleClick}
    >
        <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
            <img src={imageURL.thumbnail} alt="iphones" width={127} height={103} className="object-contain"/>
        </div>
        
    </div>
  )
}

export default PhoneCards