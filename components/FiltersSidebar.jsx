"use client";

import { useState } from "react";

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

  // SVGs for car types (Figma style)
  const carIcons = {
    Mini: (
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.44 2.52L18.286 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9H20C20 9.79565 19.6839 10.5587 19.1213 11.1213C18.5587 11.6839 17.7956 12 17 12C16.2044 12 15.4413 11.6839 14.8787 11.1213C14.3161 10.5587 14 9.79565 14 9H8C8 9.79565 7.68393 10.5587 7.12132 11.1213C6.55871 11.6839 5.79565 12 5 12C4.20435 12 3.44129 11.6839 2.87868 11.1213C2.31607 10.5587 2 9.79565 2 9H0V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H2.286L2.701 3.03C3.08654 2.13063 3.72751 1.36415 4.54447 0.825551C5.36143 0.286953 6.31847 -8.76156e-05 7.297 2.00608e-08H13.098C13.9797 -6.82888e-05 14.8457 0.232993 15.6082 0.675553C16.3707 1.11811 17.0027 1.75444 17.44 2.52ZM15.703 3.512C15.4406 3.05269 15.0615 2.67092 14.604 2.40538C14.1465 2.13985 13.627 1.99999 13.098 2H11V4H15.982L15.703 3.512ZM4.462 4H9V2H7.297C6.70999 2.00006 6.13589 2.17234 5.64583 2.4955C5.15577 2.81865 4.77128 3.27847 4.54 3.818L4.462 4ZM4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.73478 5.89464 8.48043 5.70711 8.29289C5.51957 8.10536 5.26522 8 5 8C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9ZM18 9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9Z"
          fill="currentColor"
        />
      </svg>
    ),
    Economy: (
      <svg
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.566V11H2C2 11.7956 2.31607 12.5587 2.87868 13.1213C3.44129 13.6839 4.20435 14 5 14C5.79565 14 6.55871 13.6839 7.12132 13.1213C7.68393 12.5587 8 11.7956 8 11H14C14 11.7956 14.3161 12.5587 14.8787 13.1213C15.4413 13.6839 16.2044 14 17 14C17.7956 14 18.5587 13.6839 19.1213 13.1213C19.6839 12.5587 20 11.7956 20 11H22V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H16.667L14.527 1.188C14.37 0.834518 14.1138 0.534157 13.7895 0.323301C13.4653 0.112446 13.0868 0.000144317 12.7 2.57207e-10H5.554C5.19151 -5.81227e-06 4.83583 0.0985048 4.525 0.285L0.485 2.709C0.337089 2.79787 0.214689 2.92349 0.129702 3.07366C0.0447151 3.22384 3.28176e-05 3.39345 0 3.566ZM8 2V5H2V4.132L5.554 2H8ZM10 2H12.7L14.478 5H10V2ZM18 11C18 11.2652 17.8946 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11ZM5 12C4.73478 12 4.48043 11.8946 4.29289 11.7071C4.10536 11.5196 4 11.2652 4 11C4 10.7348 4.10536 10.4804 4.29289 10.2929C4.48043 10.1054 4.73478 10 5 10C5.26522 10 5.51957 10.1054 5.70711 10.2929C5.89464 10.4804 6 10.7348 6 11C6 11.2652 5.89464 11.5196 5.70711 11.7071C5.51957 11.8946 5.26522 12 5 12Z"
          fill="currentColor"
        />
      </svg>
    ),
    Compact: (
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.714 4L2.848 2.015C3.19792 1.40282 3.70345 0.894023 4.31335 0.540161C4.92326 0.186299 5.61587 -4.95815e-05 6.321 9.89544e-09H7.971C8.28931 0.000128485 8.60299 0.0762316 8.88597 0.221983C9.16896 0.367735 9.41306 0.578925 9.598 0.838L11.858 4H17C17.6566 4 18.3068 4.12933 18.9134 4.3806C19.52 4.63188 20.0712 5.00017 20.5355 5.46447C20.9998 5.92876 21.3681 6.47996 21.6194 7.08658C21.8707 7.69321 22 8.34339 22 9H20C20 9.79565 19.6839 10.5587 19.1213 11.1213C18.5587 11.6839 17.7956 12 17 12C16.2044 12 15.4413 11.6839 14.8787 11.1213C14.3161 10.5587 14 9.79565 14 9H7C7 9.79565 6.68393 10.5587 6.12132 11.1213C5.55871 11.6839 4.79565 12 4 12C3.20435 12 2.44129 11.6839 1.87868 11.1213C1.31607 10.5587 1 9.79565 1 9H0V5C0 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4H1.714ZM6.321 2C5.96847 2.00011 5.62224 2.09341 5.31737 2.27042C5.01251 2.44744 4.75985 2.70189 4.585 3.008L4.018 4H9.399L7.971 2H6.321ZM5 9C5 8.73478 4.89464 8.48043 4.70711 8.29289C4.51957 8.10536 4.26522 8 4 8C3.73478 8 3.48043 8.10536 3.29289 8.29289C3.10536 8.48043 3 8.73478 3 9C3 9.26522 3.10536 9.51957 3.29289 9.70711C3.48043 9.89464 3.73478 10 4 10C4.26522 10 4.51957 9.89464 4.70711 9.70711C4.89464 9.51957 5 9.26522 5 9ZM18 9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9Z"
          fill="currentColor"
        />
      </svg>
    ),
    SUV: (
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.941 1.24643e-09C13.5777 -1.5892e-05 14.2052 0.15196 14.7714 0.443293C15.3375 0.734626 15.8259 1.1569 16.196 1.675L17.858 4H20C20.5304 4 21.0391 4.21071 21.4142 4.58579C21.7893 4.96086 22 5.46957 22 6V9H20C20 9.79565 19.6839 10.5587 19.1213 11.1213C18.5587 11.6839 17.7956 12 17 12C16.2044 12 15.4413 11.6839 14.8787 11.1213C14.3161 10.5587 14 9.79565 14 9H8C8 9.79565 7.68393 10.5587 7.12132 11.1213C6.55871 11.6839 5.79565 12 5 12C4.20435 12 3.44129 11.6839 2.87868 11.1213C2.31607 10.5587 2 9.79565 2 9H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 1.24643e-09 2 1.24643e-09H12.941ZM9 2H2V4H9V2ZM11 2V4H15.4L14.569 2.838C14.384 2.57879 14.1397 2.36751 13.8565 2.22175C13.5734 2.076 13.2595 1.99997 12.941 2H11ZM18 9C18 8.73478 17.8946 8.48043 17.7071 8.29289C17.5196 8.10536 17.2652 8 17 8C16.7348 8 16.4804 8.10536 16.2929 8.29289C16.1054 8.48043 16 8.73478 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9ZM5 10C5.26522 10 5.51957 9.89464 5.70711 9.70711C5.89464 9.51957 6 9.26522 6 9C6 8.73478 5.89464 8.48043 5.70711 8.29289C5.51957 8.10536 5.26522 8 5 8C4.73478 8 4.48043 8.10536 4.29289 8.29289C4.10536 8.48043 4 8.73478 4 9C4 9.26522 4.10536 9.51957 4.29289 9.70711C4.48043 9.89464 4.73478 10 5 10Z"
          fill="currentColor"
        />
      </svg>
    ),
    Premium: (
      <svg
        width="22"
        height="12"
        viewBox="0 0 22 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 0V2.041L9.4 4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5V9H1C1 9.79565 1.31607 10.5587 1.87868 11.1213C2.44129 11.6839 3.20435 12 4 12C4.79565 12 5.55871 11.6839 6.12132 11.1213C6.68393 10.5587 7 9.79565 7 9H14C14 9.79565 14.3161 10.5587 14.8787 11.1213C15.4413 11.6839 16.2044 12 17 12C17.7956 12 18.5587 11.6839 19.1213 11.1213C19.6839 10.5587 20 9.79565 20 9H22C22 8.34339 21.8707 7.69321 21.6194 7.08658C21.3681 6.47996 20.9998 5.92876 20.5355 5.46447C20.0712 5.00017 19.52 4.63188 18.9134 4.3806C18.3068 4.12933 17.6566 4 17 4H11.857L9.598 0.838C9.41593 0.582874 9.17645 0.37411 8.89888 0.228547C8.6213 0.0829835 8.31339 0.00469632 8 0ZM4 8C4.26522 8 4.51957 8.10536 4.70711 8.29289C4.89464 8.48043 5 8.73478 5 9C5 9.26522 4.89464 9.51957 4.70711 9.70711C4.51957 9.89464 4.26522 10 4 10C3.73478 10 3.48043 9.89464 3.29289 9.70711C3.10536 9.51957 3 9.26522 3 9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8ZM17 8C17.2652 8 17.5196 8.10536 17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9C18 9.26522 17.8946 9.51957 17.7071 9.70711C17.5196 9.89464 17.2652 10 17 10C16.7348 10 16.4804 9.89464 16.2929 9.70711C16.1054 9.51957 16 9.26522 16 9C16 8.73478 16.1054 8.48043 16.2929 8.29289C16.4804 8.10536 16.7348 8 17 8Z"
          fill="currentColor"
        />
      </svg>
    ),
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
    "Europ Car",
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
    className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-[80px] flex items-center justify-center gap-4 bg-[#0066b2] text-white rounded-lg font-bold"
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
          <h3 className="font-semibold mb-3 text-[12px]">Car Type</h3>
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
    <h3 className="font-semibold">Transmission</h3>
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
            <h3 className="font-semibold">Cards Accepted at pickup for deposit</h3>
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
            <h3 className="font-semibold">Deposit</h3>
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
            <h3 className="font-semibold">Rental Company</h3>
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
