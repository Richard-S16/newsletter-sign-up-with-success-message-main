import classes from "../styles/List.module.css";

export default function List({ items }: { items: string[] }) {
  return (
    <ul class={classes.list}>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
