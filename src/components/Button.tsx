import { ComponentChildren, JSX } from "preact";
import classes from "../styles/Button.module.css";

interface ButtonProps {
  children: ComponentChildren;
  onClick?: JSX.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
