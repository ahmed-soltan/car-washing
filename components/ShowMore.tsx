"use client"

import { updateSearchParams } from "@/utils"
import CustomButton from "./CustomButton"
import { useRouter } from "next/navigation"

type ShowMoreType = {
    pageNumber:number,
    isNext:boolean,
    setLimit: (limit:number) => void
}
const ShowMore = ({pageNumber , isNext , setLimit} :ShowMoreType) => {
    const handleNavigation = () =>{
        const Limit = (pageNumber+1) *6;
       setLimit(Limit)
    }
  return (
    <div className="w-full gap-5 mt-10 flex-center">
        {!isNext && (
            <CustomButton title="Show More" ButtonType={"button"} containerStyles="bg-primary-blue text-white rounded-full" handleClick={handleNavigation}/>
        )}
    </div>
  )
}

export default ShowMore