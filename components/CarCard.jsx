import {
  Info,
  Users,
  Cog,
  Snowflake,
  Briefcase,
  Check
} from "lucide-react";

export default function CarCard({ car }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-5 font-lexend">
      <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            {car.model}
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">
            Or similar – {car.type}
          </p>
        </div>

        <button className="text-[#0174b7] text-xs flex items-center gap-1 hover:underline self-end">
          <Info className="w-4 h-4" />
          Rental Conditions
        </button>
      </div>

      {/* Car Image */}
      <div className="flex justify-center mb-4">
        <img
          src="/image.png"
          alt={car.model}
          className="w-full max-w-xs sm:max-w-sm h-32 sm:h-36 object-contain"
        />
      </div>

      {/* Features */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-gray-200 pb-4 mb-5 text-gray-400 text-[11.5px] font-medium">
        
        <div className="flex items-center gap-1.5">
          <Users className="w-4 h-4" />
          <span>{car.seats} seats</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Cog className="w-4 h-4" />
          <span>{car.transmission}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Snowflake className="w-4 h-4" />
          <span>Air Condition</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Briefcase className="w-4 h-4" />
          <span>{car.bags} Bags</span>
        </div>
      </div>

      {/* Price & Conditions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        
        {/* Price */}
        <div>
          <div className="text-red-600 text-sm line-through">
            {car.originalPrice} 77.50  €
          </div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900">
            {car.price} 59.50 €
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Price per day: {car.price_per_day} €
          </p>
        </div>

        {/* Conditions */}
        <ul className="space-y-1.5">
          {car.rental_conditions.map((condition, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-gray-700"
            >
              <Check className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
              <span>{condition}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <div className="bg-white rounded-md  py-1.5">
          <img
            src="/CITYGO.png"
            alt="Provider"
            className="h-10 object-contain"
          />
        </div>

        <button className="w-full sm:flex-1 bg-[#0174b7] hover:bg-[#0067a3] text-white text-sm font-medium py-2.5 rounded-full transition-colors">
          View Deal
        </button>
      </div>
      </div>
    </div>
  );
}
