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
                        <div className="w-10 h-10 leading-10 align-middle text-center text-sm absolute right-8 top-7 rounded-full bg-[#edf738] border border-1 border-black">{ store.rating.toFixed(1) }</div>
                        <Image src="/mock_store_card.png" width={377} height={161} alt="yer" className="mb-4" />
                        <p className="font-bold">{ store.name }</p>
                        <p className="h-0 text-right text-xs text-gray-300 right-0">Min. order: { store.products[0].minQuantity.toFixed(1) } pieces </p>
                        <p className="text-gray-700">{ store.featuredCategories.join(", ") }</p>
                    </div>
                ))
            }
        </div>
    );
}