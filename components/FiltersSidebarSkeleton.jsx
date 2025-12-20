import { carIcons } from "@/components/carIcons";

export default function FiltersSidebarSkeleton() {
  return (
    <aside className="w-full max-w-[455px] flex flex-col gap-[53px] font-lexend animate-pulse">

      {/* ================= Map Block ================= */}
      <div className="w-full h-[248.3px] rounded-lg bg-gray-200 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        w-[320px] h-[80px] bg-blue-500/60 rounded-2xl flex items-center justify-center">
          <div className="h-4 w-36 bg-white/40 rounded"></div>
        </div>
      </div>

      {/* ================= Filters Block ================= */}
      <div className="bg-white rounded-lg p-6 space-y-6">

        {/* Header */}
      <div className="flex items-center justify-between">
  {/* Results count skeleton */}
  <div className="h-4 w-24 bg-gray-200 rounded"></div>

  {/* Clear Filters skeleton button */}
  <div className="text-sm border border-gray-300 px-4 py-1 rounded-full hover:bg-gray-50">
    <div className="h-3 w-20 bg-gray-300 rounded"></div>
  </div>
</div>


        {/* Car Type */}

<div className="h-3 w-24 bg-gray-200 rounded mb-3"></div>

  <div className="flex flex-wrap gap-2">
    {Object.keys(carIcons).map((type) => (
      <div
        key={type}
        className="px-4 py-2 rounded-full text-[12px] flex items-center gap-2 border border-gray-300 bg-white"
      >
        <span className="text-black">{carIcons[type]}</span>
    
          <div className="h-3 w-20 bg-gray-300 rounded"></div>
      
      </div>
    ))}
  </div>


{/* Passengers */}
<div>
  <div className="h-3 w-24 bg-gray-200 rounded mb-3"></div>
  <div className="flex flex-wrap gap-2">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="px-4 py-2 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-400 text-sm"
      >
        <div className="h-3 w-20 bg-gray-300 rounded"></div>
      </div>
    ))}
  </div>
</div>


        {/* Transmission */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-28 bg-gray-200 rounded"></div>
          <svg
  className="w-4 h-4 rotate-180 transition-transform"
  viewBox="0 0 20 20"
  fill="none"
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
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-48 bg-gray-200 rounded"></div>
                     <svg
  className="w-4 h-4 rotate-180 transition-transform"
  viewBox="0 0 20 20"
  fill="none"
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
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 w-32 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Deposit */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-24 bg-gray-200 rounded"></div>
                      <svg
  className="w-4 h-4 rotate-180 transition-transform"
  viewBox="0 0 20 20"
  fill="none"
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
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 w-36 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Company */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-3 w-36 bg-gray-200 rounded"></div>
                     <svg
  className="w-4 h-4 rotate-180 transition-transform"
  viewBox="0 0 20 20"
  fill="none"
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
          <div className="space-y-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 w-40 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
