// // // export default function Header() {
// // //   return (
// // //     <header className="bg-[#0066b2] text-white">
// // //       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
// // //         <span className="font-semibold text-lg">Logoipsum</span>

// // //         <div className="flex items-center gap-6">
// // //           <button className="text-sm">Sign in</button>
// // //           <button className="text-xl">☰</button>
// // //         </div>
// // //       </div>
// // //     </header>
// // //   );
// // // }

// // export default function Header() {
// //   return (
// //     <header className="w-full h-[60px] bg-[#0066b2] text-white">
// //       <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-[50px]">
        
// //         {/* Logo container */}
// //         <div className="flex items-center gap-3 w-[202px] h-[40px]">
// //           <img
// //             src="/logo.png"
// //             alt="logo"
// //             className="w-[40px] h-[40px]"
// //           />
// //           <span className="font-semibold text-[18px] leading-[22px]">
// //             Logoipsum
// //           </span>
// //         </div>

// //         {/* Right actions */}
// //         <div className="flex items-center gap-3">
// //           <button className="text-[14px] leading-[18px]">
// //             Sign in
// //           </button>
// //           <button className="w-[25px] h-[12px] text-xl leading-none">
// //             ☰
// //           </button>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // }

// export default function Header() {
//   return (
//     <header className="w-full h-[60px] bg-[#0066b2] text-white">
//       <div className="max-w-[1920px] mx-auto h-full flex items-center justify-between px-[50px]">

//         {/* Logo container */}
//         <div className="flex items-center gap-3 w-[202px] h-[40px] overflow-hidden">
//           <img
//             src="/logo.png"
//             alt="logo"

//           />
         
//         </div>

//         {/* Right side */}
//         <div className="flex items-center gap-3">

//           {/* Sign in */}
//           <button className="flex items-center gap-3">
//             <img
//               src="/signin.png"
//               alt="sign in"
//               className="w-[11.53px] h-[15px]"
//             />
//             <span className="text-[14px] leading-[18px]">
//               Sign in
//             </span>
//           </button>

//           {/* Hamburger */}
//           <button className="w-[110px] h-[60px] flex items-center justify-center">
//             <div className="w-[25px] h-[12px] flex flex-col justify-between">
//               <span className="h-[2px] bg-white" />
//               <span className="h-[2px] bg-white" />
//               <span className="h-[2px] bg-white" />
//             </div>
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// }


export default function Header() {
  return (
    <header className="w-full h-[60px] bg-[#0066b2] text-white">
      <div className="max-w-[1920px] mx-auto h-full flex items-center">

        {/* Left side with padding */}
        <div className="flex items-center gap-3 w-[202px] h-[40px] ml-[50px]">
          <img
            src="/logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side */}
        <div className="flex items-center gap-3 mr-0">

          {/* Sign in */}
          <button className="flex items-center gap-3">
            <img
              src="/signin.png"
              alt="sign in"
              className="w-[11.53px] h-[15px]"
            />
            <span className="text-[14px] leading-[18px]">
              Sign in
            </span>
          </button>

          {/* Hamburger container flush right */}
          <button className="w-[110px] h-[60px] flex items-center justify-center">
            <div className="w-[25px] h-[12px] flex flex-col justify-between">
              <span className="h-[2px] bg-white" />
              <span className="h-[2px] bg-white" />
              <span className="h-[2px] bg-white" />
            </div>
          </button>

        </div>
      </div>
    </header>
  );
}
