export default function FiltersSidebarSkeleton() {
  return (
    <aside className="w-full max-w-[455px] flex flex-col gap-[53px] font-lexend animate-pulse">

      {/* ================= Map Block Skeleton ================= */}
      <div className="w-full h-[248.3px] rounded-lg bg-gray-200 relative overflow-hidden">
        {/* Button */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[320px] h-[80px] bg-blue-600 rounded-lg flex items-center justify-center">
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* ================= Filters Block Skeleton ================= */}
      <div className="bg-white rounded-lg p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-8 bg-gray-200 rounded-full w-28"></div>
        </div>

        {/* Car Type */}
        <div>
          <div className="h-4 bg-gray-200 rounded w-20 mb-3"></div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-8 bg-gray-200 rounded-full w-24"
              />
            ))}
          </div>
        </div>

        {/* Passengers */}
        <div>
          <div className="h-4 bg-gray-200 rounded w-24 mb-3"></div>
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-8 bg-gray-200 rounded-full w-28"
              />
            ))}
          </div>
        </div>

        {/* Transmission */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded w-28"></div>
            <div className="h-4 bg-gray-200 rounded w-4"></div>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-24"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded w-48"></div>
            <div className="h-4 bg-gray-200 rounded w-4"></div>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-32"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Deposit */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-4 bg-gray-200 rounded w-4"></div>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-36"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Rental Company */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 bg-gray-200 rounded w-36"></div>
            <div className="h-4 bg-gray-200 rounded w-4"></div>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded"></div>
                <div className="h-3 bg-gray-200 rounded w-40"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
