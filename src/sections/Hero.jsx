import React, { useState } from "react"
import { arrowRight } from "../assets/icons"
import { bigShoe1 } from "../assets/images"
import Button from "../components/Button"
import { shoes, statistics } from "../constants"
import ShoeCard from "../components/ShoeCard"
const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section
    id = 'home'
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-8 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
          </h1>
          <p className="font-montserrat text-lg text-slate-gray leading-8 mt-8 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
          <Button label ="Shop now"
           iconURL = {arrowRight}/>

           <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat, index)=> (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                <p className="font-montserrat text-slate-500 leading-7">{stat.label}</p>
              </div>
            ))}
           </div>
      </div>
      
      <div className=" relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover">
        <img src={bigShoeImg} alt="shoe collection" 
          width={500} height={610}
          className="object-contain relative z-10"/>
      
       <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        {shoes.map((shoe, index)=>(
          <div key={index}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage = {(shoe)=>
                setBigShoeImg(shoe)
              }
              bigShoeImg= {bigShoeImg}
            />
          </div>
        ))}
      </div>
      </div>
     

    </section>
  )
}

export default Hero