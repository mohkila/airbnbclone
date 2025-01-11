"use client";

import { UsersIcon } from "@heroicons/react/20/solid";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

function Searchbar({ placeholder }: { placeholder?: string }) {
  const [input, setInput] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const [guests, setGuests] = useState(1);

  const handleSelect = (ranges: any) => {
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
    });
  };

  const handleCancel = () => {
    setInput("");
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
    });
    setGuests(1);
  };

  return (
    <div className="relative text-black p-4 sm:p-6">
      {/* Search Input */}
      <div className="relative flex items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <input
          type="text"
          placeholder={placeholder || "Search for location"}
          className="rounded-md p-2 pl-10 w-full border border-[#E15154] outline-none focus:ring-2 focus:ring-[#E15154]"
          aria-label="Search input for location"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Search
          className="absolute right-2 bg-[#E15154] text-white p-1 w-8 h-8 rounded-full cursor-pointer"
          onClick={() => {}}
        />
      </div>

      {/* Dropdown for Search Results */}
      {input && (
        <div className="absolute top-15 left-0 mt-2 w-full max-w-sm sm:max-w-md md:max-w-lg bg-white border border-gray-300 rounded-md shadow-lg z-10 p-4">
          <DateRangePicker
            ranges={[{ ...dateRange, key: "selection" }]}
            onChange={handleSelect}
            rangeColors={["#E15154"]}
            minDate={new Date()}
          />
          <div className="mt-4 space-y-4">
            {/* Guests Selector */}
            <div className="flex items-center justify-between border-b pb-2">
              <label className="text-gray-800 font-medium flex items-center">
                <UsersIcon className="h-6 w-6 text-[#E15154] mr-2" />
                Number of Guests
              </label>
              <input
                type="number"
                className="w-20 text-center border border-gray-300 rounded-md"
                value={guests}
                min={1}
                onChange={(e) => setGuests(Number(e.target.value))}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="bg-gray-300 p-2 text-black rounded-md hover:bg-gray-400"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: "/search",
                query: {
                  location: input,
                  startDate: dateRange.startDate.toISOString(),
                  endDate: dateRange.endDate.toISOString(),
                  guests,
                },
              }}
              className="bg-red-500 p-2 text-white rounded-md hover:bg-red-800"
              onClick={() => {setInput('')}}
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
