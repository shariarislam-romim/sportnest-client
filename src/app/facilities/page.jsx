import FacilityCard from '@/component/FacilityCard';
import Header from '@/component/Header';
import { fetchFacilities } from '@/lib/facilities/data';
import { Button } from '@heroui/react';
import {  ArrowBigRight, Filter } from 'lucide-react';

// const fetchFacilities = async() => {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/facilities`)
//     const data = await res.json();
//     return data || [];
// }

const FacilitiesPage = async () => {
    const facilities = await fetchFacilities();
    // console.log(facilities)


    return (
          <div className="min-h-screen bg-slate-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-2xl font-bold flex items-center gap-2 text-green-800">
                        <ArrowBigRight className="w-6 h-6 text-green-800" />
                        All Facilities
                    </h2>
                    <Button
                        variant="flat"
                        startContent={<Filter className="w-4 h-4" />}
                        className="rounded-full font-bold text-green-800"
                    >
                        Filters
                    </Button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        facilities?.map((facility,i)=><FacilityCard key={i} facility={facility}/>)
                    }
                </div>
             </main>
        </div>
    );
};

export default FacilitiesPage;