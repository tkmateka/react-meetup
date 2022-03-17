import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => (
  <div className={classes.meetupsContainer}>
    {props.meetups.map((meetup) => {
      return <MeetupItem key={meetup.id} meetup={meetup} />;
    })}
  </div>
);

export default MeetupList;
