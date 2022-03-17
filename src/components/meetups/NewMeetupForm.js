import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (ev) => {
    ev.preventDefault();

    const meetupData = {
      title: titleInputRef.current.value,
      image: imageInputRef.current.value,
      address: addressInputRef.current.value,
      description: descriptionInputRef.current.value,
    };

    // Send data to parent
    props.storeNewMeetup(meetupData);
  };

  return (
    <form onSubmit={submitHandler}>
      {/* Title */}
      <div className={classes.inputFields}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      {/* Meetup Image */}
      <div className={classes.inputFields}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={imageInputRef} />
      </div>
      {/* Address */}
      <div className={classes.inputFields}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef} />
      </div>
      {/* Description */}
      <div className={classes.inputFields}>
        <label htmlFor="description">Meetup Description</label>
        <textarea
          required
          id="description"
          rows={5}
          ref={descriptionInputRef}
        ></textarea>
      </div>
      {/* Action Buttons */}
      <div className={classes.actionButtonContainer}>
        <button className={classes.actionButton}>Add New</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
