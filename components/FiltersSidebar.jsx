"use client";

import { useState } from "react";
import { carIcons } from "@/components/carIcons";


export default function FiltersSidebar({ filters, setFilters,resultsCount  }) {
  const [expandedSections, setExpandedSections] = useState({
    transmission: true,
    deposit: true,
    cards:true,
    rentalCompany: true,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  
  const passengerOptions = [2, 4, 5, 7];

const cardsRanges = [
  { label: "Visa Credit", value: "Visa Credit" },
  { label: "Master Credit", value: "Master Credit" },
  { label: "Visa Debit", value: "Visa Debit" },
  { label: "Master Debit", value: "Master Debit" },
];


  const depositRanges = [
    { label: "€ 0 - € 500", value: "0-500" },
    { label: "€ 501 - € 1,000", value: "501-1000" },
    { label: "€ 1,001 - € 1,500", value: "1001-1500" },
    { label: "€ 1,501 - € 2,000", value: "1501-2000" },
    { label: "€ 2,000 +", value: "2000+" },
  ];

  const rentalCompanies = [
    "City Go Rentals",
    "Abby",
    "Auto Union",
    "Car Ginny",
    "Euro Car",
    "Flex Ways",
    "Green Motion",
    "OK Mobility",
    "Smart Mobility",
    "U-Save",
  ];

  const toggleFilter = (category, value) => {
    setFilters((prev) => {
      const isSelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: isSelected
          ? prev[category].filter((v) => v !== value)
          : [...prev[category], value],
      };
    });
  };

  return (
    <aside className="w-full max-w-[455px] flex flex-col gap-[53px] font-lexend">
      {/* ================= Map Block ================= */}
<div className="w-full h-[248.3px] flex flex-col gap-[10px] overflow-hidden rounded-lg relative">
  <img
    src="/map.png"
    alt="map"
    className="w-full h-full object-cover"
  />
  <button
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[80px] flex items-center justify-center gap-4 bg-[#0066b2] text-white rounded-2xl font-bold"
    style={{
      fontFamily: "Lexend Deca",
      fontSize: "19.2px",
      lineHeight: "19.2px", 
      boxSizing: "border-box", 
    }}
  >
    Show on map
  </button>
</div>


      {/* ================= Filters Block ================= */}
      <div className="bg-white rounded-lg p-6 space-y-6">
        <div className="flex items-center justify-between">
         <span className="font-medium">
            {resultsCount} Results 
          </span>
          <button
            onClick={() =>
              setFilters({
                carType: [],
                seats: [],
                transmission: [],
                deposit: [],
                cards: [],
                rentalCompany: [],
              })
            }
            className="text-sm border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-50"
          >
            Clear Filters
          </button>
        </div>

        {/* Car Type */}
        <div>
          <h3 className="font-semibold mb-3">Car Type</h3>
          <div className="flex flex-wrap gap-2">
            {Object.keys(carIcons).map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full text-[12px] flex items-center ${
                  filters.carType.includes(type)
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => toggleFilter("carType", type)}
              >
                <span className="mr-2">{carIcons[type]}</span> {type}
              </button>
            ))}
          </div>
        </div>

        {/* Passengers */}
        <div>
          <h3 className="font-semibold mb-3">Passengers</h3>
          <div className="flex flex-wrap gap-2">
            {passengerOptions.map((p) => (
              <button
                key={p}
                className={`px-4 py-2 rounded-full text-sm ${
                  filters.seats.includes(p)
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 hover:bg-gray-50"
                }`}
                onClick={() => toggleFilter("seats", p)}
              >
                {p} Passengers
              </button>
            ))}
          </div>
        </div>

        {/* Transmission */}
      <div>
  <div
    className="flex items-center justify-between mb-3 cursor-pointer"
    onClick={() => toggleSection("transmission")}
  >
    <h3 className="font-semibold mb-3">Transmission</h3>
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${
        expandedSections.transmission ? "rotate-180" : "rotate-0"
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>

  {expandedSections.transmission && (
    <div className="space-y-2">
      {/* Select All / Deselect All */}
      <label className="flex items-center gap-2 cursor-pointer font-medium">
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={
            filters.transmission.length === ["Automatic", "Manual"].length
          }
          onChange={() => {
            if (filters.transmission.length === ["Automatic", "Manual"].length) {
              // Deselect all
              setFilters((prev) => ({ ...prev, transmission: [] }));
            } else {
              // Select all
              setFilters((prev) => ({
                ...prev,
                transmission: ["Automatic", "Manual"],
              }));
            }
          }}
        />
        <span className="text-sm">All</span>
      </label>

      {["Automatic", "Manual"].map((t) => (
        <label key={t} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4"
            checked={filters.transmission.includes(t)}
            onChange={() => toggleFilter("transmission", t)}
          />
          <span className="text-sm">{t}</span>
        </label>
      ))}
    </div>
  )}
</div>


  <div>
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleSection("cards")}
          >
            <h3 className="font-semibold mb-3">Cards Accepted at pickup for deposit</h3>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                expandedSections.cards ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {expandedSections.cards && (
            <div className="space-y-2">
              {cardsRanges.map((c) => (
                <label
                  key={c.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={filters.cards.includes(c.value)}
                    onChange={() => toggleFilter("cards", c.value)}
                  />
                  <span className="text-sm">{c.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Deposit */}
        <div>
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleSection("deposit")}
          >
            <h3 className="font-semibold mb-3">Deposit</h3>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                expandedSections.deposit ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {expandedSections.deposit && (
            <div className="space-y-2">
              {depositRanges.map((d) => (
                <label
                  key={d.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={filters.deposit.includes(d.value)}
                    onChange={() => toggleFilter("deposit", d.value)}
                  />
                  <span className="text-sm">{d.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rental Company */}
        <div>
          <div
            className="flex items-center justify-between mb-3 cursor-pointer"
            onClick={() => toggleSection("rentalCompany")}
          >
            <h3 className="font-semibold mb-3">Rental Company</h3>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-transform duration-300 ${
                expandedSections.rentalCompany ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {expandedSections.rentalCompany && (
            <div className="space-y-2">
              {rentalCompanies.map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={filters.rentalCompany.includes(c)}
                    onChange={() => toggleFilter("rentalCompany", c)}
                  />
                  <span className="text-sm">{c}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
