import React from 'react'
import man from "../components/images/man-5.png"
import men from "../components/images/man-8.png"
import { Link } from 'react-router-dom';
import hero  from "../components/images/bg_hero.svg"
import bg from "../components/images/pexels-riciardus-307008.jpg"

const Hero = () => {
  return (
    <section className="h-[800px] bg-no-repeat bg-cover bg-center py-24 m-0"
    style={{
      backgroundImage: `url(${hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container max-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
           <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-400 mr-3"></div> New Trend
           </div>
           <h1 className="text-[60px] leading-[1.1] font-light mb-4">
            SEASONAL STYLE DEALS  <br/>
            <span className="font-semibold">MENS</span>
           </h1>
           <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-gray-700">
             Discover More
           </Link>
        </div>
        {/* image */}
           <div>
            <img className="h-[650px] flex mt-5" src={man} alt="" />
           </div>
      </div>
    </section>
  )
}

export default Hero;