import classes from "../styles/Card.module.css";
import Button from "./Button";
import Input from "./Input";
import List from "./List";

export default function Card() {
  const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  return (
    <div class={classes.card}>
      <img
        src="/assets/images/illustration-sign-up-mobile.svg"
        alt="Illustration sign up mobile"
      />
      <div>
        <h1 class={classes.title}>Stay updated!</h1>
        <p class={classes.paragraph}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <List items={items} />
        <Input
          type="email"
          label="Email address"
          placeholder="email@company.com"
        />
        <Button>Subscribe to monthly newsletter</Button>
      </div>
    </div>
  );
}
