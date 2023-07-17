import { useEffect, useState } from "preact/hooks";
import classes from "../styles/Card.module.css";
import Button from "./Button";
import Input from "./Input";
import List from "./List";

export default function Card() {
  const [subscribed, setSubscribed] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const items = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }),
    [];

  return (
    <>
      {!subscribed ? (
        <div class={classes.card}>
          {width >= 958 ? (
            <img
              src="/assets/images/illustration-sign-up-desktop.svg"
              alt="Illustration sign up desktop"
            />
          ) : (
            <img
              src="/assets/images/illustration-sign-up-mobile.svg"
              alt="Illustration sign up mobile"
            />
          )}

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
            <Button onClick={() => setSubscribed(true)}>
              Subscribe to monthly newsletter
            </Button>
          </div>
        </div>
      ) : (
        <div class={classes.card_subscribed}>
          <img src="/assets/images/icon-success.svg" alt="Icon success" />
          <h1 class={classes.title}>Thanks for subscribing!</h1>
          <p class={classes.paragraph}>
            A confirmation email has been sent to <b>email@company.com.</b>{" "}
            Please open it and click the button inside to confirm your
            subscription
          </p>
          <Button onClick={() => setSubscribed(false)}>Dismiss message</Button>
        </div>
      )}
    </>
  );
}
