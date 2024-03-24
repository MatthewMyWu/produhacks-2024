import FilterOptions from "./FilterOptions";
import StoreList from "./StoreList";

export default function ResultSection() {
    return (
        <div className="flex flex-col h-screen w-full p-4 overflow-auto">
            <FilterOptions />
            <StoreList />
        </div>
    );
}