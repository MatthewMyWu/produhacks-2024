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
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
        {
            storeName: "Supplier 2",
            categories: ["Jewelry"],
        },
    ];

    return (
        <div className="grid grid-cols-2">
            {
                stores.map((store, i) => (
                    <div key={i} className={`${poppins.className} p-3 relative`}>
                        <Image 
                            src={verifiedBadge} 
                            width={40} 
                            height={49} 
                            alt="yer" 
                            className="absolute right-8 bottom-[2.8em]" 
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