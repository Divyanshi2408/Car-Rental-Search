export default function SearchBar() {
  return (
    
      <div className="max-w-7xl mx-auto py-6">
        <div className="bg-white rounded-full shadow-lg flex items-center px-6 py-4">
          
          {/* Pick-up Location */}
          <div className="flex-1 border-r border-gray-200 pr-6">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Pick-up Location
            </label>
            <div className="flex items-center justify-between">
              <input 
                type="text" 
                value="Malta International Airport"
                className="text-sm text-gray-500 bg-transparent outline-none w-full"
                readOnly
              />

            </div>
          </div>

          {/* Pick-up Date */}
          <div className="flex-1 border-r border-gray-200 px-6">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Pick-up Date
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Select date</span>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Drop-off Date */}
          <div className="flex-1  px-6">
            <label className="block text-sm font-semibold text-gray-900 mb-1">
              Drop-Off Date
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Select date</span>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>


          {/* Search Button */}
          <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
  
  );
}