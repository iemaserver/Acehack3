import React from "react";
import CountdownTimer from "../components/Timer";

// TODO: update the schedule
const schedule = [
  ["2024-04-06T10:00:00", "10:00:00", "Check-In"],
  ["2024-04-06T12:00:00", "12:00:00", "Hackathon Begins!"],
  ["2024-04-06T13:00:00", "13:00:00", "Lunch"],
  ["2024-04-06T15:00:00", "15:00:00", "Workshop (Postman)"],
  ["2024-04-06T16:30:00", "16:30:00", "Mentoring Session"],
  ["2024-04-06T18:00:00", "18:00:00", "Snacks"],
  ["2024-04-06T21:30:00", "21:30:00", "Dinner"],
  ["2024-04-06T23:00:00", "23:00:00", "Mentoring Session"],
  ["2024-04-06T00:00:00", "00:00:00", "Fun Games + Coffee"],
  ["2024-04-07T09:00:00", "09:00:00", "Breakfast"],
  ["2024-04-07T11:00:00", "11:00:00", "Final Mentoring Session"],
  ["2024-04-07T12:40:00", "12:40:00", "Hack Ends!"],
  ["2024-04-07T15:00:00", "15:00:00", "Prizes + Closing Ceremony"],
];

const Live = () => {
  const [time, setTime] = React.useState(new Date());
  const [currentEvent, setCurrentEvent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // React.useEffect(() => {
  //   for (let i = 0; i < schedule.length; i++) {
  //     let d = new Date(schedule[i][0]).getTime();
  //     let t = time.getTime();
  //     if (t < d) {
  //       setCurrentEvent(i - 1);
  //       break;
  //     }
  //   }
  // }, [time]);
  return (
    <div
      id="live"
      className="py-12 bg-gray-900/30 relative scroll-smooth w-full"
    >
      <div className="flex flex-col md:flex-row text-lg text-white gap-10 mx-10 justify-between">
        <div className="flex flex-col items-start">
          <p>Hacking Starts In</p>
          <h1 className="font-semibold pb-12 grad-text">
            <CountdownTimer targetDate={new Date("2024-04-06T12:00:00")} />
          </h1>
        </div>
        {/* Uncomment when live */}
        {/* <div className="flex flex-col items-start">
          <p>Hacking Ends In</p>
          <h1 className="font-semibold pb-12 grad-text">
            <CountdownTimer targetDate={new Date("2024-04-06T12:00:00")} />
          </h1>
          <p>Happening Now</p>
          <h1 className="text-5xl font-bold pt-2 pb-12 grad-text">
            {schedule[currentEvent][2]}
          </h1>
          <p>Next</p>
          <div className="flex flex-row items-center">
            <div className="text-5xl font-bold pt-2 pb-2 pr-4 grad-text border-0 md:border-r-2 border-gray-300">
              {schedule[currentEvent + 1][2]}
            </div>
            <div className="text-5xl font-semibold pt-2 pb-2 pl-4">
              {schedule[currentEvent + 1][1].slice(0, 5)}
            </div>
          </div>
        </div> */}
        <div className="w-full md:w-4/6">
          <iframe
            src="https://widget.taggbox.com/152726"
            style={{ width: "100%", height: "600px", border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Live;
