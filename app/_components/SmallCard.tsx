import Image from "next/image";
import React from "react";
import { ExploreItem } from "../types/app";

type SmallCardProps = ExploreItem;

function SmallCard({ location, distance, img }: SmallCardProps) {
  return (
    <div
      className="flex items-center text-center flex-wrap
    
    gap-4 p-4 m-2 mt-5 rounded-lg hover:bg-gray-100 hover:shadow-md cursor-pointer
    hover:scale-110
    transition-all duration-300 ease-in-out"
    >
      <div className="relative h-16 w-16">
        <Image
          src={img}
          fill
          alt={location}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="text-gray-600 font-medium">{location}</h1>
        <p className="text-gray-500 text-sm">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
