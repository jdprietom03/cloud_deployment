import Button from "./../ui/Button";
import Image from "next/image";
import DateIcon from "./../icons/date-icon"
import AddressIcon from "./../icons/address-icon"
import ArrowRightIcon from "./../icons/arrow-right-icon"

import styles from "./event-item.module.css";

const EventItem = ({ id, title, date, location, image }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }); 

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image src={`/${image}`} alt="" width={200} height={200} priority={true}/>
      <div className={styles.content}>
        <div className={styles.title}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}> 
              <span>Explore Event</span>
              <span className={styles.icon}>
                <ArrowRightIcon/>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
