// export default function SkeletonCard() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 animate-pulse">
//       <div className="flex justify-between items-start mb-4">
//         <div className="flex-1">
//           <div className="h-5 bg-gray-200 rounded w-2/3 mb-2"></div>
//           <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//         </div>
//         <div className="h-3 bg-gray-200 rounded w-20"></div>
//       </div>
//       <div className="h-32 bg-gray-200 rounded mb-4"></div>
//       <div className="flex justify-between mb-4">
//         <div className="h-3 bg-gray-200 rounded w-16"></div>
//         <div className="h-3 bg-gray-200 rounded w-16"></div>
//         <div className="h-3 bg-gray-200 rounded w-20"></div>
//         <div className="h-3 bg-gray-200 rounded w-14"></div>
//       </div>
//       <div className="h-4 bg-gray-200 rounded w-16 mb-1"></div>
//       <div className="h-8 bg-gray-200 rounded w-24 mb-1"></div>
//       <div className="h-3 bg-gray-200 rounded w-32 mb-4"></div>
//       <div className="space-y-2 mb-5">
//         <div className="h-3 bg-gray-200 rounded"></div>
//         <div className="h-3 bg-gray-200 rounded"></div>
//         <div className="h-3 bg-gray-200 rounded"></div>
//         <div className="h-3 bg-gray-200 rounded"></div>
//       </div>
//       <div className="flex gap-3">
//         <div className="h-8 bg-gray-200 rounded w-16"></div>
//         <div className="h-10 bg-gray-200 rounded flex-1"></div>
//       </div>
//     </div>
//   );
// }


export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 animate-pulse">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="h-5 bg-gray-200 rounded w-40 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-32"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-28"></div>
      </div>

      {/* Car Image */}
      <div className="flex justify-center mb-4">
        <div className="w-full h-32 bg-gray-200 rounded"></div>
      </div>

      {/* Features Row */}
      <div className="flex items-center border-b border-gray-200 pb-[16px] mb-[20px] gap-4">
        <div className="h-3 bg-gray-200 rounded w-16"></div>
        <div className="h-3 bg-gray-200 rounded w-16"></div>
        <div className="h-3 bg-gray-200 rounded w-20"></div>
        <div className="h-3 bg-gray-200 rounded w-14"></div>
      </div>

      {/* Price & Conditions */}
      <div className="flex gap-6 mb-5">
        {/* Price */}
        <div className="flex-shrink-0">
          <div className="h-3 bg-gray-200 rounded w-20 mb-2"></div>
          <div className="h-8 bg-gray-200 rounded w-24 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-32"></div>
        </div>

        {/* Conditions */}
        <div className="flex-1 space-y-2">
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>

 
   {/* Footer */}
<div className="flex items-center gap-3">
  {/* Logo placeholder */}
  <div className="h-8 bg-gray-200 rounded w-20"></div>

  {/* Button placeholder */}
  <div className="flex-1 h-10 bg-blue-600 rounded-full flex items-center justify-center">
    <div className="h-3 bg-gray-300 rounded w-20"></div>
  </div>
</div>
    </div>
  );
}
