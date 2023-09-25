const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[250px] w-full rounded-[20px] shadow-3xl px-10 py-16"> 
      <div className="flex justify-center w-11 h-11 items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words leading-normal font-montserrat text-lg text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard