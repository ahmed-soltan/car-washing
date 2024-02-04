"use client"
import { FormEvent, useState } from "react";
import Image from "next/image";
import SearchsearchManufacturer from "./SearchManufactor";
import searchIcon from '../public/magnifying-glass.svg'
import searchModelIcon from '../public/model-icon.png'
import { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/navigation';
const SearchBtn = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image src={searchIcon} alt="search icon" width={40} height={40} />
    </button>
  );
};

const Searchbar = ({setManufacturer , setModel} : any) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  const [selected, setSelected] = useState("")
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === '' && searchModel === '') {
      return alert("Please fill in the search field")
    }
    setManufacturer(searchManufacturer);
    setModel(searchModel);
  };


  
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchsearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchBtn otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image src={searchModelIcon} alt="searchModel icon" width={25} height={25} className="absolute w-[20px] h-[20px] ml-4" />
        <input type="text" name="searchModel" value={searchModel} placeholder="Tiguan" className="searchbar__input" onChange={(e) => setSearchModel(e.target.value)} />
        <SearchBtn otherClasses={"sm:hidden"} />
      </div>
      <SearchBtn otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default Searchbar;
