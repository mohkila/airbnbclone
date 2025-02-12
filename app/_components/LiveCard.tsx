import Image from "next/image";
import { LiveItem } from "../types/app";

type LiveCardProps = LiveItem;
function LiveCard({ img, title }: LiveCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out">
      <div className="relative h-80 w-80">
        <Image src={img} alt={title} fill className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default LiveCard;
