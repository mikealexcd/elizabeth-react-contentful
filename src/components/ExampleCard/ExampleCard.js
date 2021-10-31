import client from "../../client";
import { useEffect, useState } from "react";
import styles from "./ExampleCard.module.scss";
import Caary from "../../assets/Caary.png";

function ExampleCard(props) {
  const [image, setImage] = useState(Caary);
  const [cardTitle, setCardTitle] = useState("Title");
  const [cardDescription, setCardDescription] = useState("Description");
  const [cardLabel, setCardLabel] = useState("Label");

  useEffect(
    () =>
      client
        .getEntry(props.id)
        .then((entry) => {
          setImage(entry.fields.cardImage.fields.file.url);
          setCardTitle(entry.fields.title);
          setCardDescription(entry.fields.description);
          setCardLabel(entry.fields.cardLabel);
        })
        .catch((error) => console.log(error)),
// eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className={styles.card}>
      <img className={styles.card_image} src={image} alt={cardTitle} />
      <div className={styles.card_content}>
        <h2 className={styles.card_title}>{cardTitle}</h2>
        <p className={styles.card_description}>{cardDescription}</p>
        <p className={styles.card_label}>{cardLabel}</p>
      </div>
    </div>
  );
}

export default ExampleCard;
