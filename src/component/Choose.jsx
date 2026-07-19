import { BadgeCheck, CalendarCheck2, Link, MapPin, MapPinned, Trophy, Wallet } from "lucide-react";


const Choose = () => {
    const Items = [
  {
    "id": 1,
    "title": "Premium Sports Venues",
    "icon": MapPinned,
    "description": "Play at carefully selected football turfs, badminton courts, tennis courts, swimming pools, and other high-quality sports facilities."
  },
  {
    "id": 2,
    "title": "Instant Online Booking",
    "icon": CalendarCheck2,
    "description": "Reserve your preferred facility in just a few clicks with real-time availability and a smooth booking experience."
  },
  {
    "id": 3,
    "title": "Trusted & Verified Facilities",
    "icon": BadgeCheck,
    "description": "Every listed venue is verified to ensure quality, safety, and a reliable experience for every player."
  },
  {
    "id": 4,
    "title": "Affordable Pricing",
    "icon": Wallet,
    "description": "Enjoy transparent hourly pricing with no hidden charges. Choose the perfect facility that fits your budget."
  },
  {
    "id": 5,
    "title": "Convenient Locations",
    "icon": MapPin,
    "description": "Find sports facilities in convenient locations near you, making every game easier to plan and enjoy."
  },
  {
    "id": 6,
    "title": "Multiple Sports, One Platform",
    "icon": Trophy,
    "description": "Book football turfs, badminton courts, tennis courts, swimming pools, basketball courts, and more—all from one platform."
  }
]
    
    return (
        <section className="py-24 bg-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-4 mb-16">
                    <h2 className="text-green-800 font-bold uppercase tracking-widest text-m">Our Benefits</h2>
                    <h3 className="text-4xl font-extrabold text-slate-900">Why Choose Us?</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {Items.map((item,i) => (
                        <div
                            key={i}
                            className="group p-8 bg-green-800 border border-blue-600 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-center space-y-6"
                        >
                            <div className="mx-auto w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold">{item.title}</h4>
                            <p className="text-slate-400">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Choose;