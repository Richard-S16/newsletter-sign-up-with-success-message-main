import classes from "./styles/App.module.css";
import Card from "./components/Card";

export function App() {
  return (
    <div class={classes.app}>
      <Card />
    </div>
  );
}
