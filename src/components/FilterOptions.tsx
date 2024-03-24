"use client"

import { useState } from "react";

export default function FilterOptions() {
    const [verified, setVerified] = useState(false);
    const [sortOpen, setSortOpen] = useState(false);
    // const [verified, isVerified] = useState(false);

    return (
        <div className="mb-4 flex">
            <div className="bg-[#e8e8e8] mx-3 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Verified</div>

            {/** dropdown menu; recommended + rating */}
            <div className="bg-[#e8e8e8] mx-3 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Sort</div>
            {/* <div className="bg-[#e8e8e8] mx-4 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Minimum order quantity</div> */}
        </div>
    );
}