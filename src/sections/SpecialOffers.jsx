import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
   <section className="flex justify-wrap items-center max-xl:flex-col-reverse max-container gap-10">
    <div className="flex-1">
      <img src={offer} alt="offer" width={773} height={687} className="object-contain w-full" />
    </div>
    <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"><span className="text-coral-red">Special</span> Offer</h2>
        <p className="info-text mt-5 lg:max-w-lg"> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="info-text mt-6 lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label={'Shop Now'}
            iconURL={arrowRight}/>
            <Button
            label={'Learn More'}
            backgroundColor="bg-white"
            borderColor ="border-slate-gray"
            textColor = "text-slate-gray"/>
        </div>
        
      </div>
   </section>
  )
}

export default SpecialOffers