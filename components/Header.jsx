export default function Header() {
  return (
    <header className="w-full h-[60px] bg-[#0066b2] text-white">
      <div className="max-w-[1920px] mx-auto h-full flex items-center px-4 sm:px-6 lg:px-0">

        {/* Left side with padding */}
        <div className="flex items-center gap-3 w-[202px] h-[40px] lg:ml-[50px]">
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

          {/* Sign in - hide text on very small screens */}
   <button className="flex items-center gap-2 sm:gap-3">
  <img
    src="/signin.png"
    alt="sign in"
    className="w-[11.53px] h-[15px]"
  />
  <span className="text-[14px] leading-[18px] hidden sm:inline">
    Sign in
  </span>
</button>


          {/* Hamburger menu */}
          <button className="flex items-center justify-center w-10 h-10 sm:w-[110px] sm:h-[60px]">
            <div className="w-6 h-3 flex flex-col justify-between sm:w-[25px] sm:h-[12px]">
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
