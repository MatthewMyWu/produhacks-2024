import Logo from "../../public/logo.svg";
import ProfileIcon from "../../public/profile_icon.svg";
import Image from "next/image";
import SearchIcon from "../../public/search_icon.svg";

export default function Header() {
    return (
        <div className="p-5 flex justify-between">
            <Image src={Logo} width={40} height={40} alt="Product logo"/>
            <div className="rounded-full bg-[#e8e8e8] flex">
                <Image src={SearchIcon} width={14} height={14} alt="Search icon" className="mx-2" />
                <input type="text" placeholder="Search" className="w-[60vw] rounded-r-full bg-[#e8e8e8] focus:outline-none" />
            </div>
            <Image src={ProfileIcon} width={33} height={33} alt="User profile icon"/>
        </div>
    );
}