export default function SearchBarSkeleton() {
  return (
    <div className="max-w-7xl mx-auto py-6">

      {/*  REAL TOP LOADING HEADER (NO SKELETON) */}
<div className="bg-white rounded-2xl shadow-md p-4 sm:p-6 mb-6">

  {/* LOGOS */}
  <div className="max-w-4xl mx-auto mb-6">
    <div className="flex flex-wrap justify-center sm:justify-between gap-4">

      {/* Logo */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
        <img src="/flexways.webp" alt="Flexways" className="h-4 sm:h-6 md:h-7" />
      </div>

      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
        <img src="/flexways.webp" alt="Flexways" className="h-4 sm:h-6 md:h-7" />
      </div>

      {/* Center logo */}
      <div className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center">
        <img src="/sixt.png" alt="Sixt" className="h-5 sm:h-8 md:h-10" />
      </div>

      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
        <img src="/flexways.webp" alt="Flexways" className="h-4 sm:h-6 md:h-7" />
      </div>

      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
        <img src="/flexways.webp" alt="Flexways" className="h-4 sm:h-6 md:h-7" />
      </div>

    </div>
  </div>

  {/* TEXT + PROGRESS */}
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
    <p className="text-sm font-semibold text-gray-800 text-center sm:text-left">
      Finding The Perfect Ride For You...
    </p>

    <div className="w-full sm:flex-1 h-3 bg-gray-300 rounded-full overflow-hidden">
      <div className="h-full w-[60%] bg-blue-700 rounded-full transition-all duration-500" />
    </div>
  </div>

</div>


      {/*  SEARCH BAR SKELETON */}
    <div className="bg-white md:rounded-full rounded-2xl shadow-lg px-6 py-4 animate-pulse">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">


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
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </div>
        </div>

        {/* Drop-off Date */}
        <div className="flex-1 px-6">
          <div className="h-4 bg-gray-200 rounded w-28 mb-2" />
          <div className="flex items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-28" />
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
          </div>
        </div>

        {/* Search Button */}
          <div className="flex justify-end">
            <button className="bg-[#0174b7] hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
      </div>
    </div>
    </div>
  );
}
