"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FiltersSidebar from "@/components/FiltersSidebar";
import FiltersSidebarSkeleton from "@/components/FiltersSidebarSkeleton";
import SearchBarSkeleton from "@/components/SearchBarSkeleton";
import ResultsGrid from "@/components/ResultsGrid";
import carsData from "@/data/cars.json";

export default function Home() {
  // Loading state for skeleton
  const [loading, setLoading] = useState(true);

  // State for filters
  const [filters, setFilters] = useState({
    carType: [],
    seats: [],
    transmission: [],
    deposit: [],
    rentalCompany: [],
    cards: [],
  });

  // Simulate loading (for skeleton UI)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  // Filtered cars based on filters
  const filteredCars = carsData.filter((car) => {
    // Car Type
    if (filters.carType.length && !filters.carType.includes(car.type)) {
      return false;
    }

    // Passengers (>= selected)
    if (filters.seats.length && !filters.seats.some((s) => car.seats >= s)) {
      return false;
    }

    // Transmission
    if (
      filters.transmission.length &&
      !filters.transmission.includes(car.transmission)
    ) {
      return false;
    }

    // Deposit
    if (filters.deposit.length) {
      const depositMatch = filters.deposit.some((range) => {
        if (range === "2000+") return car.deposit >= 2000;

        const [min, max] = range.split("-").map(Number);
        return car.deposit >= min && car.deposit <= max;
      });

      if (!depositMatch) return false;
    }

    // Rental Company
    if (
      filters.rentalCompany.length &&
      !filters.rentalCompany.includes(car.company)
    ) {
      return false;
    }

    // Cards Accepted
    if (filters.cards.length) {
      const cardMatch = filters.cards.some((card) =>
        car.cards_accepted.includes(card)
      );
      if (!cardMatch) return false;
    }

    return true;
  });

  // Results count for sidebar
  const resultsCount = filteredCars.length;

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto py-6 grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 lg:col-span-3">
          {loading ? (
            <FiltersSidebarSkeleton />
          ) : (
            <FiltersSidebar
              filters={filters}
              setFilters={setFilters}
              resultsCount={resultsCount}
            />
          )}
        </aside>

        {/* Results */}
        <section className="col-span-12 lg:col-span-9">
          {loading ? <SearchBarSkeleton /> : <SearchBar />}

          <ResultsGrid cars={filteredCars} />
        </section>
      </main>
    </>
  );
}
