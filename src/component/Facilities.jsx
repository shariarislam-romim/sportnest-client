import { Button } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import FacilityCard from "./FacilityCard";


const Facilities = async () => {
    // const courses = await fetchFeaturedCourses();
    // console.log(courses);
    const res = await fetch("http://localhost:3000/data.json", {
  cache: "no-store",
});

const allData = await res.json();
console.log(allData);

    return (
        <section className="py-6 pt-20 bg-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="space-y-4">
                        <h2 className="text-green-800 font-bold uppercase tracking-widest text-m">Top Rated</h2>
                        <h3 className="text-4xl font-extrabold text-slate-900">All Sports Facilities</h3>
                        <p className="text-slate-500 max-w-xl">
                            Discover premium football turfs, badminton courts, tennis courts, swimming pools, and more. Find the perfect venue for your next game and book instantly with ease.
                        </p>
                    </div>
                    <Button
                        variant="flat"
                        color="primary"
                        className="rounded-full font-bold group text-black inline-flex items-center text-lg "
                    >
                        View All Facilities <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        allData?.slice(0,6).map(data => <FacilityCard key={data?._id} data={data} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default Facilities;