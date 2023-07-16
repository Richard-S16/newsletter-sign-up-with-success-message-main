import { ComponentChildren } from "preact";
import classes from "../styles/Button.module.css";

export default function Button({ children }: { children: ComponentChildren }) {
  return <button className={classes.btn}>{children}</button>;
}
