export type PillsProps = {
  items: string[];
  mutedFrom?: number;
};

export function Pills({ items, mutedFrom = 2 }: PillsProps) {
  return (
    <div className="pills">
      {items.map((item, index) => (
        <span className={`pill ${index >= mutedFrom ? "mutedPill" : ""}`} key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
