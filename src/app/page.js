
import Choose from "@/component/Choose";
import Facilities from "@/component/Facilities";
import Hero from "@/component/Hero";
import HowBooking from "@/component/HowBooking";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero/>
      <Facilities/>
      <Choose/>
      <HowBooking/>
     
      
    </div>
  );
}
