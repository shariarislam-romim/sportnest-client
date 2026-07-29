import { Search, CalendarDays, CircleCheckBig } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose a Facility",
    description:
      "Browse football turfs, badminton courts, tennis courts, swimming pools, and more to find the perfect venue.",
    icon: Search,
  },
  {
    id: "02",
    title: "Select Date & Time",
    description:
      "Choose your preferred date, available time slot, and booking duration that fits your schedule.",
    icon: CalendarDays,
  },
  {
    id: "03",
    title: "Confirm Booking",
    description:
      "Review your booking details and reserve your favorite sports facility instantly with confidence.",
    icon: CircleCheckBig,
  },
];

const HowBooking = () => {
  return (
    <section className="py-24 bg-linear-to-r from-green-700 via-green-800 to-green-700">
      <div className="max-w-7xl mx-auto px-5">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-500 font-semibold uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            How Booking Works
          </h2>

          <p className="text-gray-400 mt-5">
            Booking your favorite sports facility is quick, simple, and takes
            less than a minute.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative bg-white border border-green-500 rounded-3xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
             
                <span className="absolute top-6 right-6 text-5xl font-bold text-green-100">
                  {step.id}
                </span>

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-green-600" />
                </div>

                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  {step.title}
                </h3>


                <p className="text-gray-400 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowBooking;