import FilterOptions from "./FilterOptions";
import StoreList from "./StoreList";

export default function ResultSection() {
    return (
        <div className="bg-blue-500 flex flex-col min-h-screen w-full p-4">
            <FilterOptions />
            <StoreList />
        </div>
    );
}