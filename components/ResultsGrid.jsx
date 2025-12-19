// "use client";

// import { useEffect, useState } from "react";
// import carsData from "@/data/cars.json";
// import CarCard from "./CarCard";
// import SkeletonCard from "./SkeletonCard";

// export default function ResultsGrid() {
//   const [loading, setLoading] = useState(true);
//   const [cars, setCars] = useState([]);

//   useEffect(() => {
//     // simulate API delay for skeleton loader
//     const timer = setTimeout(() => {
//       setCars(carsData);
//       setLoading(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//         {Array.from({ length: 9 }).map((_, i) => (
//           <SkeletonCard key={i} />
//         ))}
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
//       {cars.map((car, index) => (
//         <CarCard key={car.id ?? index} car={car} />
//       ))}
//     </div>
//   );
// }

"use client";

import SkeletonCard from "./SkeletonCard";
import CarCard from "./CarCard";
import { useState, useEffect } from "react";

export default function ResultsGrid({ cars }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (cars.length === 0) {
    return <p className="text-center w-full">No cars match your filters.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {cars.map((car, index) => (
        <CarCard key={car.id ?? index} car={car} />
      ))}
    </div>
  );
}
