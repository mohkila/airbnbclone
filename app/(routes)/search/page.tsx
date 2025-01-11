"use client";
import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/header/Header";
import Map from "@/app/_components/Map";
import Places from "@/app/Places";

import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const guests = searchParams.get("guests");

  return (
    <>
      <Header
        placeholder={`${location || "Location"} | ${
          startDate || "Start Date"
        } to ${endDate || "End Date"} | ${guests || "Guests"} guests`}
      />
      <main className="p-6">
        <h1 className="text-xl font-bold">Stay in {location}</h1>
        <div>
          <button className="p-2 bg-slate-800 hover:bg-[#E15154] font-extrabold rounded-xl text-sm transition-all duration-300 m-1">
            Cancellation Flexibility
          </button>
          <button className="p-2 bg-slate-800 hover:bg-[#E15154] font-extrabold rounded-xl text-sm transition-all duration-300 m-1">
            Type of Place
          </button>
          <button className="p-2 bg-slate-800 hover:bg-[#E15154] font-extrabold rounded-xl text-sm transition-all duration-300 m-1">
            Price
          </button>
          <button className="p-2 bg-slate-800 hover:bg-[#E15154] font-extrabold rounded-xl text-sm transition-all duration-300 m-1">
            Rooms and Beds
          </button>
          <button className="p-2 bg-slate-800 hover:bg-[#E15154] font-extrabold rounded-xl text-sm transition-all duration-300 m-1">
            More
          </button>
        </div>
        <div className="w-full bg-slate-800 flex  gap-6   p-5">
          <div className="flex flex-col gap-6  p-4">
            {Places?.map((place, index) => (
              <div
                key={index}
                className="border-2 border-[#E15154] rounded-lg  p-1   shadow-lg flex gap-2 justify-between  "
              >
                <div>
                  <img
                    src={place.img}
                    alt={place.title}
                    className="w-95 h-72 object-cover rounded-lg mb-4"
                  />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-5">{place.title}</h2>
                  <p className="text-sm text-red-600 mb-5">{place.description}</p>
                

                <span className="font-bold text-xl">{place.price}</span>
                <span className="ml-2 text-sm text-gray-500">
                  {place.total}
                </span>

                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(place.star))}
                </span>
                <span className="ml-1 text-gray-600">{place.star}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="sticky top-0 mt-5 border-2 border-[#E15154]"> 
            <Map/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Search;
