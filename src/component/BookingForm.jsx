"use client"
import { useState } from "react";
import { CalendarDays, Clock3, Wallet } from "lucide-react";


const BookingForm = ({facility}) => {
  const {name,price_per_hour,available_slots = [],} = facility;

  const [bookingDate, setBookingDate] = useState("");
  const [timeSlot, setTimeSlot] = useState(
    available_slots.length > 0 ? available_slots[0] : ""
  );
  const [hours, setHours] = useState(1);
  const totalPrice = price_per_hour * hours;

  return (
    <div className="bg-white max-w-3xl rounded-3xl shadow-xl p-10 sticky top-24 border border-gray-100">

      <h2 className="text-4xl font-bold text-green-800 mb-2">
        Book This Facility
      </h2>

      <p className="text-gray-500 mb-6">
        Reserve your preferred time slot quickly and securely.
      </p>

      
      <div className="mb-5">
        <label className="font-medium text-black flex items-center gap-2 mb-2">
          <CalendarDays size={18} className="text-green-700" />
          Booking Date:
        </label>

        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="input input-bordered w-full rounded-l p-1 text-gray-600"
        />
      </div>

      
      <div className="mb-5">
        <label className="font-medium flex items-center gap-2 mb-2 text-black">
          <Clock3 size={18} className="text-green-700" />
          Time Slot:
        </label>

        <select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
          className="select select-bordered w-full rounded-l p-1 text-gray-600"
        >
          {available_slots.map((slot, index) => (
            <option key={index} value={slot}>
              {slot}
            </option>
          ))}
        </select>
      </div>

     
      <div className="mb-5">
        <label className="font-medium mb-2 block text-black">
          Booking Hours:
        </label>

        <div className="flex items-center gap-4 text-gray-600 p-1">

          <button
            type="button"
            onClick={() => hours > 1 && setHours(hours - 1)}
            className="btn btn-outline btn-success">
            -
          </button>

          <span className="text-xl font-bold w-8 text-center">
            {hours}
          </span>

          <button
            type="button"
            onClick={() => setHours(hours + 1)}
            className="btn btn-outline btn-success">
            +
          </button>

        </div>
      </div>

     
      <div className="bg-green-50 rounded-2xl p-4 mb-6">

        <div className="flex justify-between mb-2">
          <span className="text-gray-700">
            Price / Hour:
          </span>

          <span className="font-semibold text-black">
            ৳{price_per_hour}
          </span>
        </div>

        <div className="flex justify-between mb-2">
          <span className="text-gray-700">
            Hours:
          </span>

          <span className="font-semibold text-black">
            {hours}
          </span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between">

          <span className="font-bold text-green-700 flex items-center gap-2">
            <Wallet size={18} className="text-green-700" />
            Total
          </span>

          <span className="text-2xl font-bold text-green-600">
            ৳{totalPrice}
          </span>

        </div>

      </div>

      <button className="btn bg-green-700 hover:bg-green-600 text-white w-full rounded-xl h-12 ">
        Confirm Booking
      </button>

    </div>
  );
};

export default BookingForm;