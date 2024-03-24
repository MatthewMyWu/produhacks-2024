import Image from "next/image";
import InfluencerStickersSVG from "../../public/influencer_stickers.svg";

export default function InfluencerStickers({ className }: { className: string }) {
    return (
        <Image 
            src={InfluencerStickersSVG}
            width={70}
            height={30}
            alt="Influencer stickers"
            className={className}
        />
    );
}