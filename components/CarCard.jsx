export default function CarCard({ car }) {
  const {
    model,
    type,
    price_per_day,
    currency,
    transmission,
    air_conditioning,
    seats,
    cards_accepted,
    rental_conditions,
  } = car;

 return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{car.model}</h3>
          <p className="text-xs text-gray-500 mt-0.5">Or similar - {car.type}</p>
        </div>
        <button className="text-blue-600 text-xs flex items-center gap-1 hover:underline">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.521 6.904 10.713 6.712C10.905 6.52 11.0007 6.28267 11 6C10.9993 5.71733 10.9033 5.48 10.712 5.288C10.5207 5.096 10.2833 5 10 5C9.71667 5 9.47933 5.096 9.288 5.288C9.09667 5.48 9.00067 5.71733 9 6C8.99933 6.28267 9.09533 6.52033 9.288 6.713C9.48067 6.90567 9.718 7.00133 10 7ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88334 18.6867 3.825 17.9743 2.925 17.075C2.025 16.1757 1.31267 15.1173 0.788001 13.9C0.263335 12.6827 0.000667933 11.3827 1.26582e-06 10C-0.000665401 8.61733 0.262001 7.31733 0.788001 6.1C1.314 4.88267 2.02633 3.82433 2.925 2.925C3.82367 2.02567 4.882 1.31333 6.1 0.788C7.318 0.262667 8.618 0 10 0C11.382 0 12.682 0.262667 13.9 0.788C15.118 1.31333 16.1763 2.02567 17.075 2.925C17.9737 3.82433 18.6863 4.88267 19.213 6.1C19.7397 7.31733 20.002 8.61733 20 10C19.998 11.3827 19.7353 12.6827 19.212 13.9C18.6887 15.1173 17.9763 16.1757 17.075 17.075C16.1737 17.9743 15.1153 18.687 13.9 19.213C12.6847 19.739 11.3847 20.0013 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#0174B7"/>
          </svg>

          Rental Conditions
        </button>
      </div>

      {/* Car Image */}
      <div className="flex justify-center mb-4">
        <img 
          src="/image.png"
          alt={car.model}
          className="w-full h-32 object-contain"
        />
      </div>

{/* Features Row with borders */}
        <div className=" flex items-center border-b border-gray-200 pb-[16px] mb-[20px] gap-[2px] text-[#A7AFC2] font-lexend font-medium text-[11.34px] leading-[20px]">
          <div className="flex items-center gap-1">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_12562)">
            <path d="M8.25002 2.57812C6.82615 2.57812 5.67188 3.73239 5.67188 5.15625C5.67188 6.58011 6.82615 7.73438 8.25002 7.73438C9.6739 7.73438 10.8281 6.58011 10.8281 5.15625C10.8281 3.73239 9.6739 2.57812 8.25002 2.57812Z" fill="#A7AFC2"/>
            <path d="M5.49976 9.10938C4.0759 9.10938 2.92163 10.2637 2.92163 11.6875V12.5045C2.92163 13.0224 3.29692 13.4639 3.808 13.5473C6.7497 14.0276 9.74985 14.0276 12.6915 13.5473C13.2025 13.4639 13.5778 13.0224 13.5778 12.5045V11.6875C13.5778 10.2637 12.4236 9.10938 10.9997 9.10938H10.7654C10.6386 9.10938 10.5125 9.12947 10.3919 9.16885L9.79695 9.3631C8.79157 9.69138 7.7079 9.69138 6.7026 9.3631L6.10756 9.16885C5.98698 9.12947 5.86094 9.10938 5.7341 9.10938H5.49976Z" fill="#A7AFC2"/>
            </g>
            <defs>
            <clipPath id="clip0_1_12562">
            <rect width="16.5" height="16.5" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <span>{car.seats} seats</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_12316)">
            <path d="M8.6244 1.65015C4.97956 1.65015 2.02441 4.6053 2.02441 8.25015C2.02441 11.895 4.97956 14.8501 8.6244 14.8501C12.2692 14.8501 15.2244 11.895 15.2244 8.25015C15.2244 4.6053 12.2692 1.65015 8.6244 1.65015ZM11.9244 8.05012C11.9244 8.46427 11.5886 8.80012 11.1744 8.80012H9.92437C9.51015 8.80012 9.17437 9.1359 9.17437 9.55012V11.0002C9.17437 11.3039 8.92815 11.5501 8.6244 11.5501C8.32072 11.5501 8.0745 11.3039 8.0745 11.0002V9.55012C8.0745 9.1359 7.73865 8.80012 7.32447 8.80012H7.17447C6.76025 8.80012 6.42447 9.1359 6.42447 9.55012V11.0001C6.42447 11.3039 6.17821 11.5501 5.87444 11.5501C5.57067 11.5501 5.32441 11.3039 5.32441 11.0001V5.50017C5.32441 5.1964 5.57067 4.95015 5.87444 4.95015C6.17821 4.95015 6.42447 5.1964 6.42447 5.50017V6.9502C6.42447 7.36441 6.76025 7.70017 7.17447 7.70017H7.32447C7.73865 7.70017 8.0745 7.36441 8.0745 6.9502V5.50009C8.0745 5.19636 8.32072 4.95015 8.6244 4.95015C8.92815 4.95015 9.17437 5.19636 9.17437 5.50009V6.9502C9.17437 7.36441 9.51015 7.70017 9.92437 7.70017H10.0744C10.4886 7.70017 10.8244 7.36441 10.8244 6.9502V5.50017C10.8244 5.1964 11.0706 4.95015 11.3743 4.95015C11.6782 4.95015 11.9244 5.1964 11.9244 5.50017V8.05012Z" fill="#A7AFC2"/>
            </g>
            <defs>
            <clipPath id="clip0_1_12316">
            <rect width="17.25" height="16.5" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.125 7.5625H12.2581L14.4856 5.335L13.5162 4.35875L10.3125 7.5625H8.9375V6.1875L12.1412 2.98375L11.165 2.01438L8.9375 4.24188V1.375H7.5625V4.24188L5.335 2.01438L4.35875 2.98375L7.5625 6.1875V7.5625H6.1875L2.98375 4.35875L2.01438 5.335L4.24188 7.5625H1.375V8.9375H4.24188L2.01438 11.165L2.98375 12.1412L6.1875 8.9375H7.5625V10.3125L4.35875 13.5162L5.335 14.4856L7.5625 12.2581V15.125H8.9375V12.2581L11.165 14.4856L12.1412 13.5162L8.9375 10.3125V8.9375H10.3125L13.5162 12.1412L14.4856 11.165L12.2581 8.9375H15.125V7.5625Z" fill="#A7AFC2"/>
            </svg>

            <span>Air Condition</span>
          </div>
          <div className="flex items-center gap-1">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.1875 4.8125V3.4375C6.1875 3.07283 6.33237 2.72309 6.59023 2.46523C6.84809 2.20737 7.19783 2.0625 7.5625 2.0625H8.9375C9.30217 2.0625 9.65191 2.20737 9.90977 2.46523C10.1676 2.72309 10.3125 3.07283 10.3125 3.4375V4.8125M6.875 7.5625H9.625M4.125 6.1875C4.125 5.82283 4.26987 5.47309 4.52773 5.21523C4.78559 4.95737 5.13533 4.8125 5.5 4.8125H11C11.3647 4.8125 11.7144 4.95737 11.9723 5.21523C12.2301 5.47309 12.375 5.82283 12.375 6.1875V11.6875C12.375 12.0522 12.2301 12.4019 11.9723 12.6598C11.7144 12.9176 11.3647 13.0625 11 13.0625H5.5C5.13533 13.0625 4.78559 12.9176 4.52773 12.6598C4.26987 12.4019 4.125 12.0522 4.125 11.6875V6.1875Z" stroke="#A7AFC2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6.53125 13.0625H5.15625C4.9664 13.0625 4.8125 13.2164 4.8125 13.4062V14.7812C4.8125 14.9711 4.9664 15.125 5.15625 15.125H6.53125C6.7211 15.125 6.875 14.9711 6.875 14.7812V13.4062C6.875 13.2164 6.7211 13.0625 6.53125 13.0625Z" fill="#A7AFC2"/>
            <path d="M11.3438 13.0625H9.96875C9.7789 13.0625 9.625 13.2164 9.625 13.4062V14.7812C9.625 14.9711 9.7789 15.125 9.96875 15.125H11.3438C11.5336 15.125 11.6875 14.9711 11.6875 14.7812V13.4062C11.6875 13.2164 11.5336 13.0625 11.3438 13.0625Z" fill="#A7AFC2"/>
            </svg>

            <span>{car.bags} Bags</span>
          </div>
        </div>
<div >
        {/* Price and Conditions - Side by Side */}
        <div className="flex gap-6 mb-5">
          {/* Left: Price */}
          <div className="flex-shrink-0">
            <div className="text-red-600 text-sm font-medium line-through mb-1">{car.originalPrice} 77.35€</div>
            <div className="text-3xl font-bold text-gray-900 leading-tight">{car.price} 59.5€</div>
            <p className="text-xs text-gray-500 mt-1">Price per day: {car.price_per_day} €</p>
          </div>

          {/* Right: Conditions */}
          <ul className="space-y-1.5 flex-1">
            {car.rental_conditions.map((condition, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                <svg className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>{condition}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-md px-3 py-1.5">
           
              <img 
          src="/CITYGO.png"
          alt={car.model}
         
        />
   
          </div>
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-full transition-colors">
            View Deal
          </button>
        </div>
      </div>
</div>
  );
}

