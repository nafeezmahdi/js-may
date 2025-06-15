const hasMeeting = false;

// Creating a Promise
const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    // If no meeting is scheduled, create meeting details
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
    // Resolve the Promise with meetingDetails
  } else {
    reject(new Error("Meeting already scheduled"));
    // If a meeting already exists, reject the Promise
  }
});

// Function that returns a Promise (to simulate async behavior)
const addToCalender = (meetingDetails) => {
  const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

  return Promise.resolve(calendar);
  // returns a resolved Promise with calendar string
};

meeting
  .then(addToCalender)
  .then((res) => {
    console.log(JSON.stringify(res));
  })
  .catch((err) => {
    console.log(err.message);
  });
// .then() receives the resolved value from the meeting Promise
// Now, this value is passed as an argument to the addToCalender function:
// So meetingDetails = the resolved object from meeting
// The previous .then() returned a Promise (because addToCalender returns Promise.resolve(...)).
// Now this .then() waits for that Promise to resolve and prints the result.

console.log("Promise.js"); // this runs immediately (non-blocking)
// "Promise.js" appears first because Promises are asynchronous, so the .then() chain doesn't block the main thread.
