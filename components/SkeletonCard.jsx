import {
  Info,
  Users,
  Cog,
  Snowflake,
  Briefcase,
  Check
} from "lucide-react";

export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-5 font-lexend animate-pulse">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <div className="h-5 sm:h-6 w-40 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Rental Conditions button skeleton */}
        <div className="flex items-center gap-1 self-end">
          <Info className="w-4 h-4 text-[#0174b7]" />
          <div className="h-3 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Car Image */}
      <div className="flex justify-center mb-4">
        <div className="w-full max-w-xs sm:max-w-sm h-32 sm:h-36 bg-gray-200 rounded"></div>
      </div>

      {/* Features */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4 mb-5 text-gray-400 text-[11.5px] font-medium">
        
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
           <div className="h-3 w-12 bg-gray-300 rounded"></div>
        </div>

        <div className="flex items-center gap-1.5">
          <Cog className="w-4 h-4" />
           <div className="h-3 w-12 bg-gray-300 rounded"></div>
        </div>

        <div className="flex items-center gap-1.5">
          <Snowflake className="w-4 h-4" />
           <div className="h-3 w-12 bg-gray-300 rounded"></div>
        </div>

        <div className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4" />
           <div className="h-3 w-12 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Price & Conditions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">

        {/* Price */}
        <div>
          <div className="h-3 w-20 bg-gray-200 rounded mb-2"></div>
          <div className="h-8 sm:h-9 w-28 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Conditions */}
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-3.5 h-3.5 bg-gray-300 rounded-full mt-0.5"></div>
              <div className="h-3 w-40 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center gap-3">

        {/* Provider Logo */}
        <div className="h-10 w-24 bg-gray-200 rounded-md"></div>

        {/* CTA Button – SAME BLUE AS REAL UI */}
        <div className="w-full sm:flex-1 h-10 bg-[#0174b7] rounded-full flex items-center justify-center gap-2">
          
          <div className="h-3 w-20 bg-gray-300 rounded"></div>
        </div>
      </div>

    </div>
  );
}
