import type { StackGroup, StackItem } from "../types/portfolio";
import { Icon } from "./ui/Icon";
import styles from "./Stack.module.scss";

export type StackProps = {
  groups: StackGroup[];
};

function stackItemClass(item: StackItem) {
  if (item.level === "high") return `${styles.item} ${styles.high}`;
  if (item.level === "medium") return `${styles.item} ${styles.medium}`;
  return styles.item;
}

export function Stack({ groups }: StackProps) {
  return (
    <section className="section warm" id="stack">
      <div className="eyebrow reveal">02 - Tech stack</div>
      <h2 className="sectionHeading reveal reveal-delay-1">
        Tools I reach for <i>by default</i>
      </h2>
      <p className="sectionSub reveal reveal-delay-2">
        Built over 10+ years, refined through production work across national and European projects.
      </p>

      <div className={styles.grid}>
        {groups.map((group, index) => (
          <article className={`${styles.column} reveal reveal-delay-${Math.min(index + 1, 4)}`} key={group.label}>
            <div className={styles.head}>
              <Icon name={group.icon} />
              <h3>{group.label}</h3>
            </div>
            <div className={styles.items}>
              {group.items.map((item) => (
                <div className={stackItemClass(item)} key={item.label}>
                  <Icon name="ti-circle-filled" />
                  {item.label}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
