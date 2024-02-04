"use client";
import { useState } from "react";
import Image from "next/image";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import heroImage from '../public/hero.png'
import streetingWheel from '../public/steering-wheel.svg'
import Tire from '../public/tire.svg'
import gas from '../public/gas.svg'
import CustomButton from "./CustomButton";
import rightArrow from "../public/right-arrow.svg";
import CardDetails from "./CardDetails";

export type CarPropsType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};
const CarCard = ({ Car }: { Car: CarPropsType }) => {
    const [open , setOpen] = useState(false)
  const {
    city_mpg,
    combination_mpg,
    cylinders,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = Car;

  const carRent = calculateCarRent(city_mpg , year)
  return (
    <div className="car-card">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
            {make} {model}
        </h2>
            </div>
        <p className="flex mt-6 font-extrabold text-[32px]">
            <span className="self-start text-[14px] font-semibold">
               $
            </span>
                {carRent}
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
        </p>
        <div className="relative w-full h-40 my-3 object-contain">
            <Image
              src={generateCarImageUrl(Car)}
              alt={make}
              fill
              priority
              className="object-contain"
            />
        </div>
        <div className="relative flex w-full mt-2">
            {/* <div className="flex group-hover:invisible w-full justify-between text-grey">
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={streetingWheel} alt="streeting-wheel" width={20} height={20}/>
                    <p className="text-[14px]">{transmission==="a" ? "Automatic" : "Manual"}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={Tire} alt="streeting-wheel" width={20} height={20}/>
                    <p className="text-[14px]">{drive.toUpperCase()}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <Image src={gas} alt="streeting-wheel" width={20} height={20}/>
                    <p className="text-[14px]">{city_mpg} MPG</p>
                </div>
            </div> */}
            <div className="w-full">
                <CustomButton title="See More" handleClick={()=>setOpen(true)} containerStyles="w-full py-[16px] rounded-full bg-primary-blue" textStyles="text-white text-[14px] leading-[17px] font-bold" rightIcon={rightArrow}/>
            </div>
        </div>
        <CardDetails open={open} closeModal={()=>setOpen(false)} car={Car} />
    </div>
  );
};

export default CarCard;
