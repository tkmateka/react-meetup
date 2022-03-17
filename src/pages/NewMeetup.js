import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  // Submit Form
  const submitMeetup = (data) => {
    fetch(
      "https://react-first-app-16fc3-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res["status"] === 200) {
          alert("Meetup submitted!");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h1 className="margin-bottom-05em">New Meetup</h1>
      <NewMeetupForm storeNewMeetup={submitMeetup} />
    </section>
  );
};

export default NewMeetupPage;
