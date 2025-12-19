"use client";

import { useState } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FiltersSidebar from "@/components/FiltersSidebar";
import ResultsGrid from "@/components/ResultsGrid";
import carsData from "@/data/cars.json";

export default function Home() {
  // State for filters
  const [filters, setFilters] = useState({
    carType: [],
    seats: [],
    transmission: [],
    deposit: [],
    rentalCompany: [],
    cards: [], // Added for cards accepted filter
  });

  // Filtered cars based on filters
  const filteredCars = carsData.filter((car) => {
    // Car Type filter
    if (filters.carType.length && !filters.carType.includes(car.type)) return false;

    // Seats filter
   // Passengers filter (>= selected seats)
if (filters.seats.length && !filters.seats.some(s => car.seats >= s)) return false;


    // Transmission filter
    if (filters.transmission.length && !filters.transmission.includes(car.transmission)) return false;

    // Deposit filter
    if (filters.deposit.length) {
      const depositMatch = filters.deposit.some((range) => {
        if (range === "2000+") return car.deposit >= 2000;

        const [min, max] = range.split("-").map(Number);
        return car.deposit >= min && car.deposit <= max;
      });

      if (!depositMatch) return false;
    }

    // Rental Company filter
    if (filters.rentalCompany.length && !filters.rentalCompany.includes(car.company)) return false;

    // Cards Accepted filter
    if (filters.cards.length) {
      const cardMatch = filters.cards.some(card => car.cards_accepted.includes(card));
      if (!cardMatch) return false;
    }

    return true;
  });

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-6 grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3">
          <FiltersSidebar
  filters={filters}
  setFilters={setFilters}
  resultsCount={filteredCars.length} // pass dynamic count
/>
        </aside>

        <section className="col-span-12 lg:col-span-9">
          <SearchBar />
          <ResultsGrid cars={filteredCars} />
        </section>
      </main>
    </>
  );
}
