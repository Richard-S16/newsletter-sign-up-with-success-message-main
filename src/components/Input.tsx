import { JSX } from "preact";
import classes from "../styles/Input.module.css";

interface InputProps {
  type: string;
  label: string;
  placeholder: string;
  email: string;
  setEmail: (email: string) => void;
  emailError: string;
  setEmailError: (error: string) => void;
  validateEmail: (email: string) => boolean;
}

export default function Input({
  type,
  label,
  placeholder,
  email,
  setEmail,
  emailError,
  setEmailError,
  validateEmail,
}: InputProps) {
  const handleEmailChange = (
    event: JSX.TargetedEvent<HTMLInputElement, Event>
  ) => {
    const newEmail = event.currentTarget.value;
    setEmail(newEmail);

    if (validateEmail(newEmail)) {
      setEmailError("");
    }
  };

  return (
    <div class={classes.wrapper}>
      <div>
        <label htmlFor={type}>{label}</label>
        {emailError && <label class={classes.label_error}>{emailError}</label>}
      </div>
      {type === "email" ? (
        <input
          class={emailError ? classes.inputError : ""}
          type={type}
          name={type}
          id={type}
          placeholder={placeholder}
          value={email}
          onInput={handleEmailChange}
        />
      ) : (
        <input type={type} name={type} id={type} placeholder={placeholder} />
      )}
    </div>
  );
}
