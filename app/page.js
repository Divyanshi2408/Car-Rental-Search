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
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    carType: [],
    seats: [],
    transmission: [],
    deposit: [],
    rentalCompany: [],
    cards: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile toggle

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredCars = carsData.filter((car) => {
    if (filters.carType.length && !filters.carType.includes(car.type)) return false;

if (filters.seats.length && !filters.seats.includes(car.seats)) return false;

if (filters.seats.length && !filters.seats.some((s) => car.seats >= s)) return false;

    if (filters.transmission.length && !filters.transmission.includes(car.transmission)) return false;
    if (filters.deposit.length) {
      const depositMatch = filters.deposit.some((range) => {
        if (range === "2000+") return car.deposit >= 2000;
        const [min, max] = range.split("-").map(Number);
        return car.deposit >= min && car.deposit <= max;
      });
      if (!depositMatch) return false;
    }
    if (filters.rentalCompany.length && !filters.rentalCompany.includes(car.company)) return false;
    if (filters.cards.length && !filters.cards.some((card) => car.cards_accepted.includes(card))) return false;
    return true;
  });

  const resultsCount = filteredCars.length;

  return (
    <>
      <Header />

      <main className="mx-auto p-6">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="px-4 py-2 bg-[#0174b7] text-white rounded"
          >
            Filters
          </button>
        </div>

        <div className="lg:flex lg:gap-6">
          {/* Sidebar */}
          <div>
            {/* Mobile overlay */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}

        <aside
          className={`bg-white p-6 z-50 lg:static lg:w-auto lg:p-0 lg:col-span-3 fixed top-0 left-0 h-full overflow-y-auto transform transition-transform duration-300 ${
            isSidebarOpen ? "w-90 translate-x-0" : "w-72 -translate-x-full"
          } lg:translate-x-0`}
        >

              {/* Close button mobile */}
              <div className="flex justify-end lg:hidden mb-4">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  Close
                </button>
              </div>

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
          </div>

          {/* Results */}
          <section className="mt-6 lg:mt-0 lg:flex-1">
            {loading ? <SearchBarSkeleton /> : <SearchBar />}
            <ResultsGrid cars={filteredCars} />
          </section>
        </div>
      </main>
    </>
  );
}
