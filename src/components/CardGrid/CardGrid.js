import client from "../../client";
import ExampleCard from "../ExampleCard/ExampleCard";
import { useEffect, useState } from "react";
import styles from "./CardGrid.module.scss";

function CardGrid() {
  const [cardIds, setCardIds] = useState([]);
  const [loading, setLoading] = useState(true);

  function addCardToGrid(_oldArray, newId) {
    setCardIds((_oldArray) => [newId, ..._oldArray]);
  }

  async function requestCards() {
    client
      .getEntries({
        content_type: "exampleCard",
      })
      .then((entries) => {
        entries.items.map((entry) => addCardToGrid(cardIds, entry.sys.id));
      })
      .catch((error) => console.log(error));
      
      setLoading(false);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => requestCards(), []);

  const cards = cardIds.map((id) => <ExampleCard id={id} key={id} />);

  if (loading) {
    return (
      <div>
        <h1 className={styles.cards_container_title}>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.cards_container}>
        <div className={styles.cards_wrapper}>
          <h1 className={styles.cards_title}>
            Selected<br />Projects
          </h1>
          {cards}
        </div>
      </div>
    );
  }
}

export default CardGrid;
