"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import "./global.css";
import Searchbar from "@/components/Searchbar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "@/utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "@/constants";
import ShowMore from "@/components/ShowMore";
import { useEffect, useState } from "react";
// import loading from '../public/lo'
const Home = ({ searchParams }: any) => {
  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [limit, setLimit] = useState(6);
  const [isNext, setIsNext] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        model: model || "",
        manufacturer: manufacturer || "",
        year: year || "2022",
        fuel: fuel || "",
        limit: limit || 6,
      });
      setCars(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [model, manufacturer, year, fuel, limit]);

  const isDataEmpty = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className="home__subtitle">Explore the Cars You Might Like</p>
        </div>
        <div className="home__filters">
          <Searchbar setModel={setModel} setManufacturer={setManufacturer}/>
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} setFilter={setFuel}/>
            <CustomFilter title="year" options={yearsOfProduction} setFilter={setYear}/>
          </div>
        </div>
        {cars.length>0 ? (
          <section>
            <div className="home__cars-wrapper">
              {cars.map((car, index) => (
                <CarCard Car={car} key={index} />
              ))}
            </div>
            {/* {loading && (
              <div>
                <Image src={}/>
              </div>
            )} */}
            <ShowMore
              pageNumber={(limit ) / 6}
              isNext={(limit ) > cars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
