export default function FilterOptions() {
    return (
        <div className="bg-white mb-4 flex">
            <div className="bg-[#e8e8e8] mx-4 p-2 rounded-full">Verified</div>

            {/** dropdown menu; recommended + rating */}
            <div className="bg-[#e8e8e8] mx-4 p-2 rounded-full">Sort</div>
            <div className="bg-[#e8e8e8] mx-4 p-2 rounded-full">Minimum order quantity</div>
        </div>
    );
}