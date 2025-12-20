export default function SearchBar() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="bg-white md:rounded-full rounded-2xl shadow-lg py-4 px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          
          {/* Pick-up Location */}
          <div className="lg:border-r lg:pr-6 border-gray-200">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Pick-up Location
            </label>
            <input
              type="text"
              value="Malta International Airport"
              readOnly
              className="w-full text-sm text-gray-600 bg-transparent outline-none border border-gray-200 rounded-lg px-3 py-2 lg:border-none lg:px-0"
            />
          </div>

          {/* Pick-up Date */}
          <div className="lg:border-r lg:px-6 border-gray-200">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Pick-up Date
            </label>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 lg:border-none lg:px-0">
              <span className="text-sm text-gray-400">Select date</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
               <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Drop-off Date */}
          <div className="lg:px-6">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Drop-off Date
            </label>
            <div className="flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 lg:border-none lg:px-0">
              <span className="text-sm text-gray-400">Select date</span>
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
