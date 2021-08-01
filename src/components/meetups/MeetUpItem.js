import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetUpItem = (props) => {
  return (
    <li class={classes.item}>
      <Card>
      <div class={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div class={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div class={classes.actions}>
        <button>Favorites</button>
      </div>
      </Card>
    </li>
  );
};

export default MeetUpItem;
