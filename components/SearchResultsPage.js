// "use client";

// import { useState, useMemo } from "react";
// import carsData from "@/data/cars.json";
// import FiltersSidebar from "./FiltersSidebar";
// import ResultsGrid from "./ResultsGrid";

// export default function SearchResultsPage() {
//   const [filters, setFilters] = useState({
//     carType: [],
//     seats: [],
//     transmission: [],
//     deposit: [],
//     cards: [],
//     rentalCompany: [],
//   });

//   // Filtered cars memoized for performance
// //   const filteredCars = useMemo(() => {
// //     return carsData.filter(car => {
// //       // Car Type filter
// //       if (filters.carType.length > 0 && !filters.carType.includes(car.type)) {
// //         return false;
// //       }

// //       // Passengers filter (>= selected)
// //       if (filters.passengers.length > 0 && !filters.passengers.some(p => car.passengers >= p)) {
// //         return false;
// //       }

// //       // Transmission filter
// //       if (filters.transmission.length > 0 && !filters.transmission.includes(car.transmission)) {
// //         return false;
// //       }

// //       // Deposit filter (assuming car.deposit is a number)
// //       if (filters.deposit.length > 0) {
// //         const matchesDeposit = filters.deposit.some(range => {
// //           if (range === "2000+" && car.deposit >= 2000) return true;
// //           const [min, max] = range.split("-").map(s => parseInt(s.replace(/[^0-9]/g, ""), 10));
// //           return car.deposit >= min && car.deposit <= max;
// //         });
// //         if (!matchesDeposit) return false;
// //       }

// //       // Rental Company filter
// //       if (filters.rentalCompany.length > 0 && !filters.rentalCompany.includes(car.rentalCompany)) {
// //         return false;
// //       }

// //       return true;
// //     });
// //   }, [filters]);
// const filteredCars = useMemo(() => {
//   return carsData.filter((car) => {

//     // Car Type
//     if (
//       filters.carType.length > 0 &&
//       !filters.carType.includes(car.type)
//     ) {
//       return false;
//     }

//     // Passengers (JSON uses seats)
//  // Passengers filter (>= selected seats)
// if (
//   filters.seats.length > 0 &&
//   !filters.seats.some((s) => car.seats >= s)
// ) {
//   return false;
// }


//     // Transmission
//     if (
//       filters.transmission.length > 0 &&
//       !filters.transmission.includes(car.transmission)
//     ) {
//       return false;
//     }

//     // Deposit
//     if (filters.deposit.length > 0) {
//       const matchesDeposit = filters.deposit.some(range => {
//         if (range === "2000+" && car.deposit >= 2000) return true;
//         const [min, max] = range.split("-").map(Number);
//         return car.deposit >= min && car.deposit <= max;
//       });
//       if (!matchesDeposit) return false;
//     }

//     // Cards Accepted (JSON uses cards_accepted)
//     if (filters.cards.length > 0) {
//       const matchesCard = filters.cards.some(card =>
//         car.cards_accepted?.includes(card)
//       );
//       if (!matchesCard) return false;
//     }

//     // Rental Company (JSON uses company)
//     if (
//       filters.rentalCompany.length > 0 &&
//       !filters.rentalCompany.includes(car.company)
//     ) {
//       return false;
//     }

//     return true;
//   });
// }, [filters]);


//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       <FiltersSidebar filters={filters} setFilters={setFilters} />
//       <ResultsGrid cars={filteredCars} />
//     </div>
//   );
// }
