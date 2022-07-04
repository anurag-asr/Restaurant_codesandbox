import Detailed from "./Detailed";
import Image from "./Image";
import Rating from "./Rating";
import styles from "./RestaurantCard.module.css";

export function Restaurent({ data }) {
  console.log(data);
  const {
    name,
    id,
    costForTwo,
    minOrder,
    deliveryTime,
    votes,
    rating,
    reviews,
    src
  } = data;

  return (
    <div>
      <div className={styles.container}>
        <div>
          <Image src={src} width="100px" height="120px" />
        </div>

        <div>
          <Detailed
            className={styles.detailsContainer}
            key={id}
            name={name}
            deliveryTime={deliveryTime}
            minOrder={minOrder}
            costForTwo={costForTwo}
          />
        </div>

        <div>
          <Rating votes={votes} rating={rating} reviews={reviews} />
        </div>
      </div>

      <div className={styles.footer}>{/* Rfooter*/}</div>
    </div>
  );
}
