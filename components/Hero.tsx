"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'
import heroImage from '../public/hero.png'
const Hero = () => { 
  const handleScroll = () =>{

  }
  return (
    <div className="hero">
      <div className='flex-1 pt-36 px-3'>
        <h1 className='hero__title'>
          Find , Book , or Rent a Car Quick and Easily
        </h1>
        <p className='hero__subtitle'>
        Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton title={"Expolore Now"} disabled={false} containerStyles={"rounded-full bg-primary-blue text-white mt-10"} ButtonType="button" handleClick={handleScroll}/>
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src={heroImage} alt='Hero' fill className='object-contain'/>
        </div>
          <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero