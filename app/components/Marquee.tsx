import styles from "./Marquee.module.scss";

export type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        {repeatedItems.map((item, index) => (
          <span className={styles.item} key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
