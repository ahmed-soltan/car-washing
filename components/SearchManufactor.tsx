"use client";
import { Combobox, Transition } from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";
import car from "../public/car-logo.svg";
import { Fragment, useState } from "react";
type manuFactorPropsType = {
  selected: string;
  setSelected: (manufactor: string) => void;
};

const SearchManufactor = ({
  selected,
  setSelected,
}: manuFactorPropsType) => {
  const [query, setQuery] = useState("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox
        value={selected}
        onChange={(value) => setSelected(value)}
      >
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src={car}
              alt="car Image"
              className="ml-4"
              width={20}
              height={20}
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            displayValue={(selected: string) => selected}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Volkswagn"
          />
          <Transition
            as="div" // Specify an actual element like div
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* Render a single element as the child */}
            {filteredManufacturers &&
              filteredManufacturers.map((value, index) => (
                <Combobox.Option
                  value={value}
                  key={index}
                  className={({ active }) =>
                    `relative search-manufacturer__option ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                  onClick={()=>setSelected(value)}
                >
                 {value}
                </Combobox.Option>
              ))}
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufactor;
