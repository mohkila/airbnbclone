import Image from "next/image";
import Link from "next/link";
import React from "react";

const Outdoors = ({
  img,
  title,
  description,
  linkText,
  linkHref,
}: {
  img: string;
  title: string;
  description: string;
  linkText: string;
  linkHref?: string; // Optional if no link action
}) => {
  return (
    <div className="container relative h-[400px] min-w-[300px]">
      <Image
        src={img}
        alt={`${title} image`}
        fill
        className="object-cover rounded-2xl opacity-20"
        priority // Optimize image loading for above-the-fold components
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div className="text-white p-5 text-xl rounded-full bg-black bg-opacity-50">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h2 className="text-lg mt-2">{description}</h2>
        </div>
        {linkHref ? (
          <Link href={linkHref}>
            <a
              className="bg-red-400 text-white hover:bg-red-900 
              font-extrabold p-3 transition-all duration-300 px-4 py-2 
              rounded-lg mt-4"
              aria-label={`Navigate to ${title}`}
            >
              {linkText}
            </a>
          </Link>
        ) : (
          <button
            className="bg-red-400 text-white hover:bg-red-900 
            font-extrabold p-3 transition-all duration-300 px-4 py-2 
            rounded-lg mt-4"
          >
            {linkText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Outdoors;
