import classes from "../styles/Input.module.css";

interface Input {
  type: string;
  label: string;
  placeholder: string;
}

export default function Input({ type, label, placeholder }: Input) {
  return (
    <div class={classes.wrapper}>
      <label htmlFor={type}>{label}</label>
      <input type={type} name={type} id={type} placeholder={placeholder} />
    </div>
  );
}
