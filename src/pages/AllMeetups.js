import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  // Run Fetch only if there are no dependencies
  useEffect(() => {
    fetch(
      "https://react-first-app-16fc3-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Map data
        const meetupsList = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetupsList.push(meetup);
        }

        setIsLoading(false);
        setMeetups(meetupsList);
      });
  }, []);

  // Show Loading...
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  console.log(meetups);

  // Render data if stopped loading...
  return (
    <section>
      <h1 className="margin-bottom-05em">All Meetups</h1>

      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetupsPage;
