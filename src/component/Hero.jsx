"use client";
import { Button } from "@heroui/react";
import { ArrowRight, Star, Play, CircleCheck } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Separator} from "@heroui/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import FootballTurf from "../app/images/Football-Turf.jpeg"
import Badminton from "../app/images/badminton.webp"


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Hero = () => {

    return (
        <section 
        className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-32 bg-linear-to-r from-green-700 via-green-800 to-green-700">

            <Swiper
                navigation
                pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">   
                                    Book Your Perfect{' '}
                                    <span className="bg-clip-text text-transparent bg-blue-400">
                                        Football <br />
                                    </span>{' '}
                                    Match.
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                                    Reserve premium football turfs with high-quality artificial grass, bright floodlights, and flexible booking slots for friendly matches or competitive games.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        href="/courses"
                                        color="primary"
                                        size="lg"
                                        className="inline-flex items-center h-14 px-10 text-lg font-bold shadow-2xl shadow-blue-600/30 group bg-blue-900 rounded-full border border-blue-600 text-blue-300"
                                    >
                                        Explore Turfs <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        variant="bordered"
                                        size="lg"
                                        className="inline-flex items-center h-14 px-8 text-lg font-bold rounded-full group bg-blue-900 border border-blue-600 text-blue-300"
                                    >
                                        <CircleCheck className="mr-2 fill-blue-700 group-hover:scale-110 transition-transform" /> Book Now
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-4 pt-6 grayscale opacity-60">
            
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                                        alt="LinkedIn"
                                        width={100}
                                        height={24}
                                        className="h-6 w-auto"
                                    />
                                     <Separator orientation="vertical" 
                                     className="h-6 w-px bg-transparent" 
                                     style={{ backgroundColor: "#4E56ED" }}/>
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                                        alt="YouTube"
                                        width={100}
                                        height={24}
                                        className="h-6 w-auto"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                                    <Image
                                        src={FootballTurf}
                                        alt="Learning"
                                        fill
                                        className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">   
                                    Book Your Perfect{' '}
                                    <span className="bg-clip-text text-transparent bg-blue-400">
                                        Badminton <br />
                                    </span>{' '}
                                    Courts.
                                </h1>
                                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                                    Play on world-class indoor badminton courts designed for practice, tournaments, and casual games in a comfortable environment.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button
                                        href="/courses"
                                        color="primary"
                                        size="lg"
                                        className="inline-flex items-center h-14 px-10 text-lg font-bold shadow-2xl shadow-blue-600/30 group bg-blue-900 rounded-full border border-blue-600 text-blue-300"
                                    >
                                        Explore Courts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <Button
                                        variant="bordered"
                                        size="lg"
                                        className="inline-flex items-center h-14 px-8 text-lg font-bold rounded-full group bg-blue-900 border border-blue-600 text-blue-300"
                                    >
                                        <CircleCheck className="mr-2 fill-blue-700 group-hover:scale-110 transition-transform" /> Book Now
                                    </Button>
                                </div>
                                <div className="flex items-center space-x-4 pt-6 grayscale opacity-60">
                                    
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
                                        alt="LinkedIn"
                                        width={100}
                                        height={24}
                                        className="h-6 w-auto"
                                    />
                                     <Separator orientation="vertical" 
                                     className="h-6 w-px bg-transparent" 
                                     style={{ backgroundColor: "#4E56ED" }}/>
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
                                        alt="YouTube"
                                        width={100}
                                        height={24}
                                        className="h-6 w-auto"
                                    />
                                </div>
                            </div>

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                                    <Image
                                        src={Badminton}
                                        alt="Learning"
                                        fill
                                        className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                                    />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                

            </Swiper>


        </section>
    );
};

export default Hero;