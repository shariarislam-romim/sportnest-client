

import BookingForm from '@/component/BookingForm';
import { Button, Chip } from '@heroui/react';
import {  BarChart, Users, Share2, CircleCheck,  SquareEqual, PanelTopOpen } from 'lucide-react';
import { Share } from 'next/font/google';
import Image from 'next/image';

const fetchSingleFacility = async (id)=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/facilities/${id}`)
    const data = await res.json();
    return data || {};
}

export default async function FacilityDetails({params}) {
    const {id} = await params;
    const facility = await fetchSingleFacility(id);
    // console.log(facility)
    const { _id, name, facility_type,image,location,price_per_hour,capacity,available_slots, description,booking_count } = facility;
   
    const featuredItems = [
        { icon: BarChart, label: facility_type },
        { icon: Users, label: capacity },
        { icon: SquareEqual, label: booking_count  },
        { icon : PanelTopOpen, label: 'Available'}
        
    ];
    return (
        <section className='bg-slate-200'>
            <div className="max-w-7xl  mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <div className="lg:col-span-2 space-y-8">
                    <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl aspect-video">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className=" object-cover transform transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-6 left-6">
                            <Chip
                                color="primary"
                                variant="solid"
                                className="font-bold shadow-xl"
                            >
                                {facility_type}
                            </Chip>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                            {name}
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            {description}
                        </p>
                    </div>


                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white/70 backdrop-blur-md p-8 rounded-4xl border border-white/20 shadow-xl space-y-5">
                        <div className="space-y-2">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">{facility_type}</p>
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-black text-green-800">৳{price_per_hour}</span>
                                <span className="text-green-800  font-bold">/hour</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-slate-700 font-medium">
                                <strong>Location:</strong>  {location}
                            </p>

                            <p>
                                <strong className='text-slate-700 '>Available Slots:</strong>
                            </p>  
                            <ul className="space-y-3">
                                { available_slots.map((time, i) => (<li key={i}
                                        className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                        <div className="w-1.5 h-1.5 bg-green-700 rounded-full"></div>
                                        {time}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-wrap gap-5 pt-2 ">
                        {featuredItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3  px-6 py-3 rounded-2xl border border-green-700 text-slate-900 font-bold hover:bg-white hover:shadow-lg transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5 text-green-700" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </div>
                        <div className="flex flex-col sm:flex-row gap-10 pt-3">
                            <Button
                                        variant="bordered"
                                        size="lg"
                                        className="inline-flex gap-2 items-center h-10 px-5 font-semibold rounded-xl group bg-green-700 border border-green-900 text-state-200"
                                    ><CircleCheck className=" group-hover:scale-110 transition-transform"
                                     size={18} />
                                         Book Now
                            </Button>
                            <Button
                                        variant="bordered"
                                        size="lg"
                                        className="inline-flex items-center h-10 px-6 text-lg font-medium rounded-xl group border border-green-900 text-green-800"
                                    ><Share2 className='size-4.5 mr-2 group-hover:scale-110 transition-transform'/>
                                        Share
                            </Button>
                        </div>
                        
                    </div>
                </div>
            </div>
        

        <div className='border-t border-border text-stone-300 mt-6 pt-8'>
            <BookingForm facility={facility}/>
        </div>
        </div>
        </section>
    );
}



const NotFound = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
            <h2 className="text-2xl font-bold text-red-500">Course not found</h2>
            <p className="text-muted-foreground mt-2">Please log in to view protected course details.</p>
        </div>
    );
}