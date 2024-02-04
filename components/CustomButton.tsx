"use client"
import Image from "next/image";
import { MouseEventHandler } from "react";

type CustomButtonPropsType = {
    title: string,
    containerStyles: string,
    ButtonType?: "submit" | "reset" | "button";
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
    textStyles?:string;
    rightIcon?: string;
}

const CustomButton = ({title , containerStyles , ButtonType , handleClick , disabled , textStyles , rightIcon}:CustomButtonPropsType) => {
  return (
    <button disabled={disabled} onClick={handleClick} className={`custom-btn ${containerStyles}`} type={ButtonType}>
        <span className={`flex-1 ${textStyles}` }>
            {title}
        </span>
        {rightIcon && <Image src={rightIcon} alt="right-arrow" width={20} height={20}/>}
    </button>
  )
}

export default CustomButton