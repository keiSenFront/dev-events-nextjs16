import Image from "next/image";
import Link from "next/link";
import { EventItem } from "@/lib/constants";
const EventCard = ({ title, image, slug, location, date, time }: EventItem) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        src={image}
        className="poster"
        width={200}
        height={100}
        alt={title}
      />
      <div className="flex gap-2">
        <Image src={"/icons/pin.svg"} width={14} height={14} alt="location" />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Image
            src={"/icons/calendar.svg"}
            width={14}
            height={14}
            alt="location"
          />
          <p>{date}</p>
        </div>
        <div>
          <Image
            src={"/icons/clock.svg"}
            width={14}
            height={14}
            alt="location"
          />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;