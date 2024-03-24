import Logo from "../../public/logo.svg";
import ProfileIcon from "../../public/profile_icon.svg";
import Image from "next/image";
import SearchIcon from "../../public/search_icon.svg";

export default function Header() {
    return (
        <div className="p-5 flex justify-between bg-white z-10 w-full sticky top-0 left-0 border-b-[1px] border-gray-300">
            <Image src={Logo} width={76} height={37} alt="Product logo"/>
            <div className="rounded-full bg-white flex border-[1px] border-black py-3">
                <Image src={SearchIcon} width={14} height={14} alt="Search icon" className="mx-4" />
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="w-[60vw] rounded-r-full bg-white focus:outline-none" 
                />
            </div>
            <Image src={ProfileIcon} width={33} height={33} alt="User profile icon"/>
        </div>
    );
}