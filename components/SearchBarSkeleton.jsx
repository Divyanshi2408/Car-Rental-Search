export default function SearchBarSkeleton() {
  return (
    <div className="max-w-7xl mx-auto py-6">

      {/* 🔹 REAL TOP LOADING HEADER (NO SKELETON) */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">

        {/* Logos */}
        <div className="flex items-center justify-center gap-6 mb-4">
          <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/flexways.webp" alt="Flexways" className="h-6" />
          </div>

          <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/flexways.webp" alt="Flexways" className="h-6" />
          </div>

          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
            <img src="/sixt.png" alt="Sixt" className="h-8" />
          </div>

          <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/flexways.webp" alt="Flexways" className="h-6" />
          </div>

          <div className="w-16 h-16 rounded-full bg-white shadow flex items-center justify-center">
            <img src="/flexways.webp" alt="Flexways" className="h-6" />
          </div>
        </div>

        {/* Text + Progress */}
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
            Finding The Perfect Ride For You...
          </p>

          <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-blue-600 rounded-full transition-all duration-500" />
          </div>
        </div>
      </div>

      {/* 🔹 SEARCH BAR SKELETON */}
      <div className="bg-white rounded-full shadow-lg flex items-center px-6 py-4 animate-pulse">

        {/* Pick-up Location */}
        <div className="flex-1 border-r border-gray-200 pr-6">
          <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
          <div className="h-4 bg-gray-200 rounded w-48" />
        </div>

        {/* Pick-up Date */}
        <div className="flex-1 border-r border-gray-200 px-6">
          <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-28" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Drop-off Date */}
        <div className="flex-1 px-6">
          <div className="h-4 bg-gray-200 rounded w-28 mb-2" />
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-28" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
            <div className="h-4 w-4 bg-gray-200 rounded" />
          </div>
        </div>

        {/* Search Button */}
        <div className="ml-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-white/70 rounded" />
        </div>
      </div>
    </div>
  );
}
