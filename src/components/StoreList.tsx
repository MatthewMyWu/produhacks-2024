import Image from "next/image";
import verifiedBadge from "../../public/verified_badge.svg";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["700", "400"], preload: false });

export default function StoreList() {
    const stores = [
        {
            storeName: "Supplier 1",
            categories: ["Textiles"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 3",
            categories: ["Clothing", "ye"],
        },
        {
            storeName: "Supplier 1",
            categories: ["Textiles"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                stores.map((store, i) => (
                    <div key={i} className={`${poppins.className} p-4 bg-green-200 relative`}>
                        <Image 
                            src={verifiedBadge} 
                            width={40} 
                            height={49} 
                            alt="yer" 
                            className="absolute bottom-11 left-[285px]" 
                        />
                        <Image src="/mock_store_card.png" width={377} height={161} alt="yer" className="mb-4" />
                        <p className="font-bold">{ store.storeName }</p>
                        <p className="text-gray-700">{ store.categories.join(", ") }</p>
                    </div>
                ))
            }
        </div>
    );
}