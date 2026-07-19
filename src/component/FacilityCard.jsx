import { Chip } from "@heroui/react";
import { MapPin} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FacilityCard = ({data}) => {
    const { _id, name, facility_type,image,location,price_per_hour,capacity,available_slots } = data;


    return (
        <div
            className="group flex flex-col bg-green-700 rounded-3xl border border-green-400 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
            <div className="relative aspect-16/10 overflow-hidden">
                <Image src={image }

                    alt=" Image"
                    height={400}
                    width={640}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3">
                    <Chip
                        size="sm"
                        color="primary"
                        variant="solid"
                        className="font-bold text-[10px] uppercase"
                    >
                        {facility_type}
                    </Chip>
                </div>
            </div>
            <div className="p-5 flex flex-col grow space-y-3">
                <Link href={`/allData/${_id}`}>
                    <h4 className="font-bold text-slate-900 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {name}
                    </h4>
                </Link>
                <div className="flex items-center justify-between pt-2 border-t border-slate-400">
                    <div className="flex items-center gap-1 text-[12px] font-bold text-slate-400">
                        <MapPin className="w-3 h-3" />
                        <span>{location}</span>
                    </div>
                    <span className="font-black text-blue-400">${price_per_hour}</span>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;