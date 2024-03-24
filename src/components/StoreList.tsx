import Image from "next/image";
import verifiedSvg from "../../public/Group 35448.svg";

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
            storeName: "Supplier 3",
            categories: ["Clothing", "ye"],
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {
                stores.map((store, i) => (
                    <div key={i} className="p-4 bg-green-200 relative">
                        <Image 
                            src={verifiedSvg} 
                            width={40} 
                            height={49} 
                            alt="yer" 
                            className="absolute bottom-7 left-[285px]" 
                        />
                        <Image src="/Rectangle 7.png" width={377} height={161} alt="yer" />
                        <p><b>{ store.storeName }</b></p>
                        <p>{ store.categories.join(", ") }</p>
                    </div>
                ))
            }
        </div>
    );
}