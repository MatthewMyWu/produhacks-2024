import Image from "next/image";
import verifiedBadge from "../../public/verified_badge.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["700", "400"], preload: false });

export default function StoreList({ suppliers }: { suppliers: any[] }) {
    return (
        <div className="grid grid-cols-2">
            {
                suppliers.length > 0 &&
                suppliers.map((store: any, i) => (
                    <div key={i} className={`${poppins.className} p-3 relative`}>
                        {
                            store.isVerified && 
                            <Image 
                                src={verifiedBadge} 
                                width={40} 
                                height={49} 
                                alt="yer" 
                                className="absolute right-8 bottom-[2.8em]" 
                            />
                        }
                        <Image src="/mock_store_card.png" width={377} height={161} alt="yer" className="mb-4" />
                        <p className="font-bold">{ store.name }</p>
                        <p className="text-gray-700">{ store.featuredCategories.join(", ") }</p>
                    </div>
                ))
            }
        </div>
    );
}