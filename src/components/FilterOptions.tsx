"use client"
import { useContext, useState } from "react";
import {SearchContext} from "./SearchContext"

export default function FilterOptions() {
    const searchContext = useContext(SearchContext)
    const [verified, setVerified] = useState(false);
    const [recommended, setRecommended] = useState(false);

    const toggleVerified = () => {
        setVerified(!verified)
        searchContext.filterOptions.isVerified = verified
    }

    const toggleRecommended = () => {
        setRecommended(!recommended)
        searchContext.filterOptions.recommended = recommended
    }

    return (
        <div className="mb-4 flex">
            <button onClick={toggleVerified} className="bg-[#e8e8e8] mx-3 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Verified { verified ? 'y' : 'n'}</button>
            <button onClick={toggleRecommended} className="bg-[#e8e8e8] mx-3 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Recommended { recommended ? 'y' : 'n'}</button>
            {/** dropdown menu; recommended + rating */}
            <div className="bg-[#e8e8e8] mx-3 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Sort</div>
            {/* <div className="bg-[#e8e8e8] mx-4 p-2 px-4 rounded-full hover:bg-[#d9d9d9]">Minimum order quantity</div> */}
        </div>
    );
}